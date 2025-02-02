import userModel from "../models/userModel.js"
import validator from 'validator'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
}



const loginUser = async (req, res) => {
    try {
        const {email,password} = req.body;
        const user =await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:"user doesnot exists"})
        }
        const isMatch = await bcrypt.compare(password,user.password);

        if(isMatch){
            const token = createToken(user._id);
            res.json({success:true,token})
        }else{
            res.json({success:false,message:'invalid credentials'})
        }

    } catch (error) {
        console.log(error)
        res.json({success :false,message:error.message})
        
    }

}


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const imageFile = req.file;
           
      
        //checking the user already exist 
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter a  valid email" })
        }

        if (password.length < 8) {
            return res.json({ succes: false, message: "please enter strong password" })

        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        /////////crate the profile url////////

        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url;

         

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            profile:imageUrl,
        })
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})

    }

}

const fetchUserData = async (req, res) => {
    try {
        const {userId} = req.body;
        const user = await userModel.findOne({_id:userId});
        res.json({success:true,user})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }

}

const adminLogin = async (req,res) => {
    try {
        const {email,password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)

            res.json({success:true,token})
        }else{
            res.json({success:false,message:"invalid credentials"})

        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})

        
    }
    

}

export { loginUser, registerUser, adminLogin ,fetchUserData }