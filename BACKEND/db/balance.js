import mongoose, { Schema } from "mongoose";

const balanceSchema = new Schema({
    value:{
        type:String,
        default:0
    }
})

export default mongoose.model("balance",balanceSchema)