import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId:{ype:String,required:true},
    items:{type:Array,required:ture},
    amount:{type:Number,required:ture},
    address:{type:Object,required:ture},
     status:{type:String,required:ture,default:'Place order'},
     PaymentMethod:{type:String,required:ture},
     payment:{type:Boolean,required:true,default:false},
     date:{type:Number,required:ture}
})


const orderModel = mongoose.model.order || mongoose.model('order',orderSchema);
export default orderModel;