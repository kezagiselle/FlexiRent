import express from 'express';
const houseRouter = express.Router();
import houseControllers from '../controllers/house.js';
import allValidation from '../Utilis/validation.js';

houseRouter.post('/addHouse',allValidation.addHouseValidation,houseControllers.addHouse);
houseRouter.get('/getAll',houseControllers.getAllHouses)
houseRouter.get('/findById',houseControllers.findById);
houseRouter.put('/update/:id',houseControllers.updateHouse);
houseRouter.delete('/delete/:id',houseControllers.deleteHouse);

export default houseRouter;