import express from 'express';
const assetRouter = express.Router();
import assetControllers from "../controllers/asset.js";
import allValidation from '../Utilis/validation.js';

assetRouter.post('/addAsset',assetControllers.addAsset);
assetRouter.get('/getAll', assetControllers.getAllAssets);
assetRouter.get('/findById',assetControllers.findById);
assetRouter.put('/update/:id',assetControllers.updateAsset);
assetRouter.delete('/delete/:id',assetControllers.deleteAsset);

export default assetRouter;