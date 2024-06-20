import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
   
    otp: {
        type: Number,
        required: true
    },
    otpExpires: {
        type: Date,
        required: false
    },
    verified: {
        type: String,
        required: true,
        default: false
    }
}, {
    timestamps: true
   },
);
const userModel = mongoose.model('user', userSchema);
export default userModel;