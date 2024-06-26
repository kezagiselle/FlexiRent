import ImageModel from "../Models/Image.js";
import NotFoundError from "../Errors/NotFoundError.js";
import BadRequestError from "../Errors/BadRequestError.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";
import cloudinary from "../Utilis/cloudinary.js";

const addImage = asyncWrapper(async (req, res, next) => {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).send('No file uploaded.');
      }
  
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
      }
  
      const { asset_id, uploaded_at } = req.body;
      const newImage = new ImageModel({
        asset_id,
        image: {
          filename: file.filename,
          path: file.path,
          mimetype: file.mimetype,
          size: file.size,
        },
        uploaded_at: uploaded_at || new Date()
      });
  
      await newImage.save();
      res.status(201).json(newImage);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add image' });
    }
  });
const getAllImages = asyncWrapper(async (req, res, next) => {
  const images = await ImageModel.find({});
  if (images) {
    return res.status(201).json({
      nbHits: images.length,
      images,
    });
  }
});
const findById = asyncWrapper(async (req, res, next) => {
  const imageId = req.params.id;
  const foundImage = await ImageModel.findById(imageId);
  if (!foundImage) {
    return next(new NotFoundError("Image not found"));
  }
  return res.status(200).json({ foundImage });
});
const updateImage = asyncWrapper(async (req, res, next) => {
  const imageId = req.params.id;
  const updates = req.body;

  const updatedImage = await ImageModel.findByIdAndUpdate(imageId, updates, {
    new: true,
  });
  if (!updatedImage) {
    return next(new NotFoundError("Image not found"));
  }
  res.status(200).json(updatedImage);
});
const deleteImage = asyncWrapper(async (req, res, next) => {
  const imageId = req.params.id;
  const deletedImage = await ImageModel.findByIdAndDelete(imageId);
  if (!deletedImage) {
    return next(new NotFoundError("Image not found"));
  }
  res.status(200).json({ message: "image deleted successfully" });
});
const imageControllers = {
  addImage,
  getAllImages,
  updateImage,
  findById,
  deleteImage,
};
export default imageControllers;
