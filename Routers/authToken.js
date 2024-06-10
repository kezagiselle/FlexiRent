import express from 'express';
const tokenRouter = express.Router();
import tokenControllers from '../controllers/authToken';

tokenRouter.post('/addToken',tokenControllers.addToken);
tokenRouter.get('/findByUser', tokenControllers.findByUser);
tokenRouter.delete('/delete', tokenControllers.delete);

export default tokenRouter;