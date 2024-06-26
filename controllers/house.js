import houseModel from "../Models/house.js";
import NotFoundError from "../Errors/NotFoundError.js";
import BadRequestError from "../Errors/BadRequestError.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";

const addHouse = asyncWrapper(async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        next(new BadRequestError(errors.array()[0].msg));
    }
    const newCar = await houseModel.create(req.body);
    return res.status(201).json(newCar);
});

const getAllHouses = asyncWrapper(async(req,res,next) =>{
    const houses = await houseModel.find({});
    if(houses){
        return res.status(201).json({
            nbHits: cars.length,
            houses
        });
    }
})
const findById = asyncWrapper(async (req,res,next) =>{
    const houseId = req.params.id;
    const foundHouse = await houseModel.findById(houseId);
    if(!foundHouse){
        return next(new NotFoundError('house not found'));
    }
    return res.status(200).json({ foundHouse})
});
const updateHouse = asyncWrapper(async (req,res,next) =>{
    const houseId = req.params.id;
    const updates = req.body;

    const updatedHouse = await houseModel.findByIdAndUpdate(houseId, updates, { new: true});
    if(!updatedHouse){
        return next(new NotFoundError('Car not found'));
    }
    res.status(200).json(updatedHouse);
})
const deleteHouse = asyncWrapper(async (req,res,next) => {
    const houseId = req.params.id;
    const deletedHouse = await houseModel.findByIdAndDelete(houseId);
    if(!deletedHouse){
        return next(new NotFoundError('house not found'));
    }
    res.status(200).json({message: 'house deleted successfully'})
});
const houseControllers = {
    addHouse,
    getAllHouses,
    findById,
    updateHouse,
    deleteHouse
}
export default houseControllers;