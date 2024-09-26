import express from 'express'
import {loginUser,adminLogin, registerUser} from './../controllers/userController.js'
import upload from '../middleware/multer.js';

const userRouter = express.Router();

//userRouter.post('/register',upload.fields({name:'profileImage',maxCount:1}),registerUser);
userRouter.post('/register',upload.single('profile'),registerUser);
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter;