import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Category name is required'],
        unique:true,
    }
},{timestamps:true});
export const Category=mongoose.model("Category",categorySchema)