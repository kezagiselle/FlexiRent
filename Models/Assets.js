import mongoose from "mongoose";
import { model, Schema} from "mongoose";

const assetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owner_id: { 
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    available_from: {
        type: Date,
        required: true
    },
    available_to: {
        type: Date,
        required: true
    } 
}, {
    timestamps: true
   });
const assetModel = mongoose.model('asset', assetSchema);
export default assetModel;