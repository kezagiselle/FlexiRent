import contactModel from "../Models/contactUs.js";
import BadRequestError from "../Errors/BadRequestError.js";
import NotFoundError from "../Errors/NotFoundError.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";

const addInfo = asyncWrapper(async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        next(new BadRequestError(errors.array()[0].msg));
    }
    const newContact = await contactModel.create(req.body);
    res.status(201).json(newContact);
});

const getAllInfo = asyncWrapper(async (req,res,next) =>{
    const contacts = await contactModel.find({});
    if(contacts){
        res.status(201).json({
            nbHits: assets.length,
            contacts
        });
    }
})

const findById = asyncWrapper(async (req,res,next) =>{
    const contactId = req.params.id;
    const foundId = await contactModel.findById(contactId);
    if(!foundId){
        return next(new NotFoundError('No id found'));
    }
    res.status(201).json({foundId})
});

const findByContact = asyncWrapper(async (req,res,next) =>{
    const contact = req.params.contact;
    const foundContact = await contactModel.findByContact(contact);
    if(!foundContact){
        return next(new NotFoundError('No contact found'))
    }
    res.status(201).json({foundContact})
});

const findByEmail = asyncWrapper(async (req,res,next) =>{
    const email = req.params.email;
    const foundEmail = await contactModel.findByEmail(email);
    if(!foundEmail){
        return next(new NotFoundError('No email found'));
    }
    res.status(201).json({foundEmail})
});

const updateInfo = asyncWrapper(async (req,res,next) =>{
   const contactId = req.params.id;
   const updates = req.body;

   const updatedContact = await contactModel.findByIdAndUpdate(contactId, updates, {new: true});
   if(!updatedContact){
    return next(new NotFoundError('No information found'));
   }
   res.status(201).json(updateContact);
});

const deleteInfo = asyncWrapper(async (req,res,next) =>{
    const contactId = req.params.id
    const deletedContact = await contactModel.findOneAndDelete(contactId);
    if(!deletedContact){
        return next(new NotFoundError('This information is not found'))
    }
    res.status(201).json(deletedContact);

});

const contactControllers = {
    addInfo,
    getAllInfo,
    findById,
    findByContact,
    findByEmail,
    updateInfo,
    deleteInfo
}
export default contactControllers;
