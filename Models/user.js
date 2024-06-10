import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
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