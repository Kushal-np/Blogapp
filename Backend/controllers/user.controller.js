import User from '../config/db.js'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

function generateToken(userId){
    return jwt.sign({id:userId} , process.env.JWT_SECRET_KEY)
}


export const register = async( req , res ) =>{
    try{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        return res.status(401).json({
            success:false,
            message:"Input all the fields"
        })
    }
    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(401).json({
            success:false,
            message:"User Already Exists"
        })
    }
    const hashedPassword = bcrypt.hash(password,10)
    const newUser = await User.save({username,email,password:hashedPassword})
    const token = generateToken
}
catch(error){
    return res.status(500).json({
        success:false,
        message:"Internal server error"
    })
}
}