require('dotenv').config()
const app = require("./app");
const express = require("express")
const mongoose = require("mongoose")
const connectDatabase = require("./config/database");

//connect to db
connectDatabase();

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("server is runnig on port",PORT)
})
