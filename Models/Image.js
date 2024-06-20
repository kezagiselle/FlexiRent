import mongoose, { mongo } from "mongoose";
import { model, Schema} from 'mongoose';

const imageSchema = new mongoose.Schema({
    asset_id: {
        type: Schema.Types.ObjectId,
        ref: "asset",
        required: true
    },
    image: {
        url: {
            type: String,
        }
    },
    uploaded_at:{
        type: Date,
        required: true
    }
});
const imageModel = mongoose.model('image', imageSchema);
export default imageModel;