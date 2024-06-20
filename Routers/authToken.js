import express from 'express';
const tokenRouter = express.Router();
import tokenControllers from '../controllers/authToken.js';

tokenRouter.post('/addToken',tokenControllers.addToken);
tokenRouter.get('/findByUser/:token', tokenControllers.findByUser);
tokenRouter.delete('/delete/:id', tokenControllers.deleteToken);

export default tokenRouter;