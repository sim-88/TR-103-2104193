import mongoose from "mongoose";
const orderItemSchema=new mongoose.Schema({
  ProductId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
  },
  quantity:{
    type:Number,
    required:true,
  },
})

const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    orderItems:[orderItemSchema],
    shippingAddress:{
        address:{type:String, required:true},
        city:{type:String},
        postalCode:{type:String,required:true},
        country:{type:String, required:true},
    },
    
    paymentMethod: {
        type: String,
        required: true,
      },
      paymentResult: {
        id: String,
        status: String,
        update_time: String,
        email_address: String,
      },
      taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
      },
      isPaid: {
        type: Boolean,
        required: true,
        default: false,
      },
      paidAt: {
        type: Date,
      },
      isDelivered: {
        type: Boolean,
        required: true,
        default: false,
      },
      deliveredAt: {
        type: Date,
      }
},{timestamps:true});
export const Order=mongoose.model("Order",orderSchema)