import assetModel from "../Models/Assets.js";
import NotFoundError from "../Errors/NotFoundError.js";
import BadRequestError from "../Errors/BadRequestError.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";
import cloudinary from "../Utilis/cloudinary.js";

const addAsset = asyncWrapper(async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        next(new BadRequestError(errors.array()[0].msg));
    }
    const newAsset = await assetModel.create(req.body);
    return res.status(201).json(newAsset);
});

const getAllAssets = asyncWrapper(async (req,res,next) => {
    const assets = await assetModel.find({});
if(assets){
        return res.status(201).json({
            nbHits: assets.length,
            assets
        });
    }
})

const findById = asyncWrapper(async (req,res,next) =>{
    const assetId = req.params.id;
    const foundAsset = await assetModel.findById(assetId);
    if(!foundAsset){
        return next(new NotFoundError('asset not found'));
    }
    return res.status(200).json({ foundAsset });
});
// const findByCategory = asyncWrapper(async (req,res,next) =>{
//     const category = req.params.category;
//     const foundAsset = await assetModel.findByCategory(category);
//     if(!foundAsset){
//       return next(new NotFoundError('No category found'));
//     }
//     return res.status(200).json({ foundAsset });
// });
const updateAsset = asyncWrapper(async (req,res,next) => {
    const assetId = req.params.id;
    const updates = req.body;

    const updatedAsset = await assetModel.findByIdAndUpdate(assetId, updates, {new: true });
    if(!updatedAsset){
        return next(new NotFoundError('Asset not found'));
    }
    return res.status(200).json(updatedAsset);
});
const deleteAsset = asyncWrapper(async (req,res,next) =>{
    const assetId = req.params.id;
    const deletedAsset = await assetModel.findByIdAndDelete(assetId);
    if(!deletedAsset){
        return next(new NotFoundError('Asset not found'));
    }
    return res.status(200).json({ message: 'Asset deleted successfully'});
});

const assetControllers = {
    getAllAssets,
    findById,
    // findByCategory,
    updateAsset,
    deleteAsset,
    addAsset
}
export default assetControllers;