import contactControllers from "../controllers/contactUs.js";
import express from 'express';
const contactRouter = express.Router();

contactRouter.post('/add',contactControllers.addInfo);
contactRouter.get('/getAll',contactControllers.getAllInfo);
contactRouter.get('/findById/:id',contactControllers.findById);
contactRouter.get('/findByEmail/:email',contactControllers.findByEmail);
contactRouter.get('/findByContact/:contact',contactControllers.findByContact);
contactRouter.put('/update/:id',contactControllers.updateInfo);
contactRouter.delete('/delete',contactControllers.deleteInfo);

export default contactRouter;