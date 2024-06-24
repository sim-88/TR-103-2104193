import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        validate: [validator.isEmail, 'Please provide a valid email address'],
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{timestamps:true});

export const User=mongoose.model("User",userSchema)