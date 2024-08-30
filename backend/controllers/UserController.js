import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import userModel from "../models/userModel.js"


//login user 
const loginUser = async (req,res)=>{
    const{email,password} = req.body;
    const user = await userModel.findOne({email});

   try {
     if(!user){
         return res.json({success:false,message:"frst signup"});
     }
   
     const isMatch = await bcrypt.compare(password,user.password)
 
     if(!isMatch){
         return res.json({success:false,message:"enter the correct password"})
 
     }

     const token = createToken(user._id);
     res.json({success:true,token})

   } catch (error) {
    console.log(error);
    res.json({success:false,message:"error in the login user"})
   }

}


const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


//register user

const registerUser = async(req,res)=>{
    const {name,password,email} = req.body;
    try {
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }

        if(password.length<8){
            return res.json({success:false,message:"please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //create new user
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        //save the user in the database

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token})


        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error in the registring the user"})
        
    }
     

}

export {
    loginUser,
    registerUser

}