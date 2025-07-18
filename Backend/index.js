import express from 'express'
const app = express()
import dotenv from 'dotenv'
import connectDB from "./config/db.js"
import userRoutes from "./routes/user.route.js"
dotenv.config()
connectDB()
app.use(express.json())
app.use('/api/v1/user' , userRoutes)
app.listen(process.env.PORT , ()=>{
    console.log(`Your port is running on ${process.env.PORT}`)
})