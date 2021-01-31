// importing modules
const express= require("express");
const mongoose= require("mongoose");
const cors= require("cors");
require("dotenv").config()

// app config
const app= express()
const PORT = 5000

// middlewares
app.use(cors())
app.use(express.json())

// database connection
mongoose.connect("mongodb://localhost:27017/crud",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
 .then(() => console.log("mongodb connected"))
 .catch(err => console.log(err))

// routes
app.use("/student",require("./routes/students"))


// starting the server
app.listen(PORT,()=>console.log("app started at port 5000"))