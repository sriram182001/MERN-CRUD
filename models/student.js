const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
    name: {
        maxlength:60,
        trim:true,
        type:String
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
        trim:true,
        maxlength:150,
        unique:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('student',studentSchema)