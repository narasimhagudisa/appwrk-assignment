import mongoose, { Schema } from "mongoose";


const transactionSchema = new Schema({
    date:{
        type:Date,
        default:Date.now
    },
    description:{
        type:String,
        require:true
    },
    credit:String,
    debit:String,
    remainingBalance:{
        type:String,
        require:true
    }

})

export default mongoose.model("officetransaction",transactionSchema);