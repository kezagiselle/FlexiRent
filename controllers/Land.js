import landModel from "../Models/land.js";
import NotFoundError from "../Errors/NotFoundError.js";
import BadRequestError from "../Errors/BadRequestError.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";

const addLand = asyncWrapper(async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        next(new BadRequestError(errors.array()[0].msg));
    }
    const newLand = await landModel.create(req.body);
    return res.status(201).json(newLand);
});

const getAllLands = asyncWrapper(async(req,res,next) =>{
    const lands = await landModel.find({});
    if(lands){
        return res.status(201).json({
            nbHits: cars.length,
            lands
        });
    }
})
const findById = asyncWrapper(async (req,res,next) =>{
    const landId = req.params.id;
    const foundLand = await landModel.findById(landId);
    if(!foundLand){
        return next(new NotFoundError('land not found'));
    }
    return res.status(200).json({ foundLand})
});
const updateLand = asyncWrapper(async (req,res,next) =>{
    const landId = req.params.id;
    const updates = req.body;

    const updatedLand = await landModel.findByIdAndUpdate(landId, updates, { new: true});
    if(!updatedLand){
        return next(new NotFoundError('land not found'));
    }
    res.status(200).json(updatedHouse);
})
const deleteLand = asyncWrapper(async (req,res,next) => {
    const landId = req.params.id;
    const deletedLand = await landModel.findByIdAndDelete(landId);
    if(!deletedLand){
        return next(new NotFoundError('land not found'));
    }
    res.status(200).json({message: 'land deleted successfully'})
});
const landControllers = {
    addLand,
    getAllLands,
    findById,
    updateLand,
    deleteLand
}
export default landControllers;