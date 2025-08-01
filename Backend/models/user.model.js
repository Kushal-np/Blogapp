import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    
    } , 
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    }
})

const User = mongoose.model("User", userSchema)
export default User;