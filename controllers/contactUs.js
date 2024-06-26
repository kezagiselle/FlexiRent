import contactModel from "../Models/contactUs";
import BadRequestError from "../Errors/BadRequestError";
import NotFoundError from "../Errors/NotFoundError";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async";

const addContact = asyncWrapper(async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        next(new BadRequestError(errors.array()[0].msg));
    }
    const newContact = await contactModel.create(req.body);
    res.status(201).json(newContact);
});

const getAllContacts = asyncWrapper(async (req,res,next) =>{
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
    res.status(201).json({foundContact})
});

const findByContact = asyncWrapper(async (req,res,next) =>{
    const contact = req.params.contact;
    const foundContact = await contactModel.findByContact(contact);
    if(!foundContact){
        return next(new NotFoundError('No contact found'))
    }
});

const findByEmail = asyncWrapper(async (req,res,next) =>{
    const email = req.params.email;
    const foundEmail = await contactModel.findByEmail(email);
    if(!foundEmail){
        return next(new NotFoundError('No email found'));
    }
})
