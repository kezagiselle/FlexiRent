import express from 'express';
const carRouter = express.Router();
import carControllers from '../controllers/car.js';

carRouter.post('/addCar', carControllers.addCar);
carRouter.get('/getAll',carControllers.getAllCars);
carRouter.get('/findById', carControllers.findById);
carRouter.put('/update/:id',carControllers.updateCar);
carRouter.delete('/deleteCar',carControllers.deleteCar);

export default carRouter;