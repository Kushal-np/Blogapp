import express from 'express'
const app = express()
import dotenv from 'dotenv'
import connectDB from "./config/db.js"
dotenv.config()
connectDB()
app.listen(process.env.PORT , ()=>{
    console.log("server is already running")
})