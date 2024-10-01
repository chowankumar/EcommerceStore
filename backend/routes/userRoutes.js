import express from 'express'
import {loginUser,adminLogin, registerUser ,fetchUserData} from './../controllers/userController.js'
import upload from '../middleware/multer.js';
import authUser from '../middleware/auth.js';

const userRouter = express.Router();

 
userRouter.post('/register',upload.single('image'),registerUser);
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
userRouter.get('/get-profile',authUser,fetchUserData)

export default userRouter;