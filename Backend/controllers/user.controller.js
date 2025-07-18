import { User } from "../models/user.model"
import bcrypt from 'bcryptjs'

export const register = async(req , res) =>{
    try{
        const {firstName, lastName , email, password} = req.body
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields required"
            })
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            return res.status(400).json({
                success:false,
                message:"Invalid email"
            })
        }
        if(password.length < 6){
            return res.status(400).json({
                success:false,
                message:"Password must be atleast 6 characters long"
            })
        }
        const existingUserEmail = await User.findOne({email})
        if(existingUserEmail){
            return res.status(400).json({
                success:false,
                message:"Email already exists"
            })
        }
        const user = await User.create({firstName, lastName , email, password})
        return res.status(201).json({
            success:true,
            message:"Account created successfully"
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}