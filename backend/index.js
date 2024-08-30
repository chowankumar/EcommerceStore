import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import ProductRouter from "./routes/ProductRoute.js"
import userRouter from './routes/UserRoutes.js'
 



const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://chowankumar:chowan54@cluster0.tlfso.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error: ", err);
});

app.get("/", (req, res) => {
    res.send("express app is running");
});

 



//endpoints
app.use("/api/product",ProductRouter)
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);

 




app.listen(port, (error) => {
    if (!error) {
        console.log(`Server running on port ${port}`);
    } else {
        console.log("Error in database connection: " + error);
    }
});
