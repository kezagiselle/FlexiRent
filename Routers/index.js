import express from 'express';
const Router = express.Router();
import userRouter from "./user.js";
import tokenRouter from "./authToken.js";
import assetRouter from './assets.js';
import imageRouter from './image.js';

Router.use('/users',userRouter);
Router.use('/tokens',tokenRouter);
Router.use('/assets',assetRouter);
Router.use('/images',imageRouter);

export default Router;