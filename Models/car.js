import mongoose from "mongoose";
import {model, Schema} from "mongoose";

const CarSchema = new mongoose.Schema({
    asset_id: {
        type: Schema.Types.ObjectId,
        ref: "asset",
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    fuel_type: {
        type: String,
        required: true
    }
});
const CarModel = mongoose.model('car',CarSchema);
export default CarModel