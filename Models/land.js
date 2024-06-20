import mongoose from "mongoose";
import { model, Schema} from "mongoose";

const landSchema = new mongoose.Schema({
    asset_id: {
        type: Schema.Types.ObjectId,
        ref: "asset",
        required: true
    },
    area_size: {
        type: String,
        required: true
    },
    zoning_type: {
        type: String,
        required: true
    },
});
const landModel = mongoose.model('land',landSchema);
export default landModel;