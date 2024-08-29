const port = 4000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://chowankumar:chowan54@cluster0.tlfso.mongodb.net/");

app.get("/",(req,res)=>{
    res.send("express app is running")

})

app.listen(port,(error)=>{
    if(!error){
        console.log(`server running on the port ${port} `)
    }else{
        console.log("error in database connection" + error)
    }

})
