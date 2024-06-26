import CarModel from "../Models/car.js";
import NotFoundError from "../Errors/NotFoundError.js";
import BadRequestError from "../Errors/BadRequestError.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";

const addCar = asyncWrapper(async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        next(new BadRequestError(errors.array()[0].msg));
    }
    const newCar = await CarModel.create(req.body);
    return res.status(201).json(newCar);
});

const getAllCars = asyncWrapper(async(req,res,next) =>{
    const cars = await CarModel.find({});
    if(cars){
        return res.status(201).json({
            nbHits: cars.length,
            cars
        });
    }
})
const findById = asyncWrapper(async (req,res,next) =>{
    const carId = req.params.id;
    const foundCar = await CarModel.findById(carId);
    if(!foundCar){
        return next(new NotFoundError('car not found'));
    }
    return res.status(200).json({ foundCar})
});
const updateCar = asyncWrapper(async (req,res,next) =>{
    const carId = req.params.id;
    const updates = req.body;

    const updatedCar = await CarModel.findByIdAndUpdate(carId, updates, { new: true});
    if(!updatedCar){
        return next(new NotFoundError('Car not found'));
    }
    res.status(200).json(updatedCar);
})
const deleteCar = asyncWrapper(async (req,res,next) => {
    const carId = req.params.id;
    const deletedCar = await CarModel.findByIdAndDelete(carId);
    if(!deletedCar){
        return next(new NotFoundError('Car not found'));
    }
    res.status(200).json({message: 'Car deleted successfully'})
});
const carControllers = {
    addCar,
    getAllCars,
    findById,
    updateCar,
    deleteCar
}
export default carControllers;