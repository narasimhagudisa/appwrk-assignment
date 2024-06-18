import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/transactions")
        console.log("Connected to DB")
    }
    catch(error){
        console.log("Error Occured",error.message)
    }
}

export default connectDB;