import express from "express";
import connectDB from "./db/db.js";
import transactionSchema from "./db/transactionSchema.js";
import balanceSchema from "./db/balance.js"
import balance from "./db/balance.js";
import cors from "cors"
const app = express();
let actualbalance = 0
connectDB();
app.use(express.json());
app.use(cors());

app.get("/getTransactions",async(req,res)=>{
    const transactions = await transactionSchema.find()
    console.log(transactions);
    res.send(transactions);

    
})
app.post("/createNewtransaction",async(req,res)=>{
    const {debit=0,credit=0,description} = req.body;
    let newTransaction;
    try{
        const balance = await balanceSchema.find();
        if(Number(credit)>Number(debit)){
            newTransaction = await transactionSchema({
                credit:Number(credit),
                debit:0,
                remainingBalance:actualbalance+Number(credit),
                description:description

            })
            actualbalance = actualbalance+Number(credit)
        }
        else{
            newTransaction = await transactionSchema({
                debit:Number(debit),
                credit:0,
                remainingBalance:actualbalance-Number(debit),
                description:description

            })
            actualbalance = actualbalance-Number(debit)
            

        }
        const response = newTransaction.save()
        res.send(response)

    }catch(error){
        res.send(error.message)

    }
})

app.listen(4000,()=>{
    console.log("App is running on 4000")
})