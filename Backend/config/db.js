import mongoose from "mongoose"
import dotenv from 'dotenv'

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo db connected")
    }
    catch(error){
        console.log("Connection failed" , error.message)
    }
}
export default connectDB;