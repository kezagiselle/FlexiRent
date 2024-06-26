import mongoose from "mongoose";
import {model, Schema} from 'mongoose';

const contactSchema = new mongoose.Schema({
    Names: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Message: {
        type: String,
        required: true,
    }
});
const contactModel = mongoose.model('contact', contactSchema);
export default contactModel;