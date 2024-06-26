import express from 'express';
const imageRouter = express.Router();
import imageControllers from "../controllers/Image.js";
import allValidation from '../Utilis/validation.js';
import { upload } from '../middleware/multer.js'

imageRouter.post('/upload',upload.single('image'),imageControllers.addImage);
imageRouter.get('/getAll', imageControllers.getAllImages);
imageRouter.get('/findById/:id',imageControllers.findById);
imageRouter.put('/update/:id',imageControllers.updateImage);
imageRouter.delete('/delete/:id',imageControllers.deleteImage);

export default imageRouter;