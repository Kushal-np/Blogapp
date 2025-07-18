import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength: 8 
    },
    bio:{
        type:String,
        default:""
    },
    occupation:{
        type:String,
        default:""
    },
    photoUrl:{
        type:String,
        default:""
    },
    instagram:{
        type:String,
        default:""
    },
    linkedin:{
        type:String,
        default:""
    },
    github:{
        type:String,
        default:""
    },
    X:{
        type:String,
        default:""
    }
},{timestamps:true})


export const User = mongoose.model("User" , userSchema)