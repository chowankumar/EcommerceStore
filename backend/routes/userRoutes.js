import express from 'express'
import {loginUser,adminLogin, registerUser , userData} from './../controllers/userController.js'
import upload from '../middleware/multer.js';

const userRouter = express.Router();

 
userRouter.post('/register',upload.single('profile'),registerUser);
userRouter.post('/userData',userData)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter;