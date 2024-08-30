import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true

    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
   
    category: {
        type: String,
        required: true,
        trim: true
    },
 
    image: {
        type: String,
        required: true
    },
    size:{
        type:[String],
        
    }

  
});

const ProductModel = mongoose.model("Product", productSchema);
export default  ProductModel;
