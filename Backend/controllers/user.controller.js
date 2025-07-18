import { User } from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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
        const hashPassword = await bcrypt.hash(password,10)
        const user = await User.create({firstName, lastName , email,password:hashPassword})
        console.log(hashPassword)
        return res.status(201).json({
            success:true,
            message:"Account created successfully",
            
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


export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        success: true,
        message: `Welcome back ${user.firstName}`,
       
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export const Logout = async(req,res) =>{
    try{
        return res.status(200).cookie("token" , "" , {maxAge:9}).json({
            message:"Logged out successfully" , 
            success:true
        })
    }
    catch(error){
        console.log(error.message)
    }
}