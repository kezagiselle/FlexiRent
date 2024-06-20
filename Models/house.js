import mongoose from "mongoose";
import {model, Schema} from "mongoose";

const houseSchema = new mongoose.Schema({
    asset_id: {
        type:Schema.Types.ObjectId,
        ref: "asset",
        required:true 
    },
    number_of_bedrooms: {
        type: Number,
        required: true
    },
    number_of_bathrooms: {
        type: Number,
        required: true
    },
    square_footage: {
        type: Number,
        required: true
    },
    amenities: {
        type: Number,
        required: true
    }
});
const houseModel = mongoose.model('house',houseSchema);
export default houseModel