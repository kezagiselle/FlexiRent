import mongoose, { mongo } from "mongoose";
import { model, Schema} from 'mongoose';

const imageSchema = new mongoose.Schema({
    asset_id: {
        type: Schema.Types.ObjectId,
        ref: "asset",
        required: true
    },
 image:{ 
        filename: String, 
        path: String, 
        mimetype: String, 
        size: Number 
      },
    uploaded_at:{
        type: Date,
        required: true
    }
});
const ImageModel = mongoose.model('image', imageSchema);
export default ImageModel;