import express from 'express';
const imageRouter = express.Router();
import imageControllers from "../controllers/Image.js";
import allValidation from '../Utilis/validation.js';

// imageRouter.post('/upload',upload.single('image'),addImage);
imageRouter.get('/getAll', imageControllers.getAllImages);
imageRouter.get('/findById',imageControllers.findById);
imageRouter.put('/update/:id',imageControllers.updateImage);
imageRouter.delete('/delete/:id',imageControllers.deleteImage);

export default imageRouter;