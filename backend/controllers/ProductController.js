import ProductModel from "../models/ProductModel.js";
 

//add food iteM

const addProduct = async(req,res)=>{

    let products = await ProductModel.find({});
    
    let id =0;
    if(products.length>0){
        let last_product_array = products.slice(-1);
       console.log(products.slice(-1))
        let last_product = last_product_array[0];
        id = last_product.id+1
    }else{
        id=1;
    }

    let image_filename = `${req.file.filename}`;
    const product= new ProductModel({
        id:id,
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category: req.body.category,
        image:image_filename,
        size:req.body.size
    
       

    })
    try {
        await product.save();
        res.json({success:true,message:"Product Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,messsage:"Eroor Product no Added"})
        
    }


}

const  deleteProduct = async(req,res)=>{
 
    await ProductModel.findOneAndDelete({id:req.body.id})
    console.log("product removed")
    res.json({success:true,message:"Product Removed"})




}
const  fetchProducts = async(req,res)=>{
 
     let products = await ProductModel.find({})
     console.log("products fethced")
     res.json(products)

}

export{
    addProduct,
    deleteProduct,
    fetchProducts,
}