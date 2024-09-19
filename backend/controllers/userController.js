import userModel from "../models/userModel.js"
import validator from 'validator'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

const loginUser = async (req, res) => {

}


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

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

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})

    }

}

const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }