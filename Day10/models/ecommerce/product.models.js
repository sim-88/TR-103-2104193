import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: 'Price must be greater than zero'
        }
    },
    productImage: {
        type: String,
        required: [true, 'Product image URL is required'],
    },
    stock: {
        type: Number,
        required: [true, 'Product stock is required'],
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: 'Stock cannot be negative'
        }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true });
export const Product = mongoose.model("Product", productSchema)
