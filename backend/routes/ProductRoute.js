import express from "express";
import { addProduct,deleteProduct,fetchProducts } from "../controllers/ProductController.js";
import multer from "multer"

const ProductRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)

    }
})

const upload = multer({storage:storage})


ProductRouter.post("/add",upload.single("image"),addProduct)
ProductRouter.post("/deleteproduct",deleteProduct)
ProductRouter.get("/fetchproducts",fetchProducts)
 


export default ProductRouter;