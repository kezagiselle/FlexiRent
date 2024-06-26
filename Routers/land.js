import express from'express';
const landRouter = express.Router();
import landControllers from '../controllers/Land.js';
import allValidation from '../Utilis/validation.js';

landRouter.post('/addLand', allValidation.addLandValidation,landControllers.addLand);
landRouter.get('/getAll', landControllers.getAllLands);
landRouter.get('/findById',landControllers.findById);
landRouter.put('/update/:id',landControllers.updateLand);
landRouter.delete('/delete/:id',landControllers.deleteLand);

export default landRouter;
