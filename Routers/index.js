import express from 'express';
const Router = express.Router();
import userRouter from "./user.js";
import tokenRouter from "./authToken.js";
import assetRouter from './assets.js';
import imageRouter from './image.js';
import landRouter from './land.js';
import houseRouter from './house.js';
import carRouter from './car.js';

Router.use('/users',userRouter);
Router.use('/tokens',tokenRouter);
Router.use('/assets',assetRouter);
Router.use('/images',imageRouter);
Router.use('/lands',landRouter);
Router.use('/houses',houseRouter);
Router.use('/cars',carRouter);

export default Router;