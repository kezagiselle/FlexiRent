import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export default function connectDB(){
    mongoose.connect(`mongodb+srv://keza:Gisele123@cluster0.tup85jn.mongodb.net/`)
.then(() => console.log("connected to MongoDB"))
.catch(err => console.log(err));
}