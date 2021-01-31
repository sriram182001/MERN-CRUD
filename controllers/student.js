const studentModel = require("../models/student")

// display students
const displayStudents = async (req,res) => {
    await studentModel.find({})
    .then((students) => res.send(students))
    .catch(err => console.log(err))
}

// add student
const addStudent = async (req,res) => {

    const { name, age, email } = req.body;

    if (!name || !age || !email) return res.send("Enter all the fields")

    const studentObj = new studentModel({
        name,age,email
    })

    await studentObj.save()
    .then((student) => res.send(student))
    .catch(err => console.log(err.message))
}

// get student by id
const getStudent = async (req,res) => {
    const { id } = req.params
    try {
        await studentModel.findOne({
            _id:id
        })
         .then((student) => res.send(student))
    } catch {
        return res.send("Invalid ID")
    }
}

// delete student
const deleteStudent = async (req,res) => {
    const {id} = req.params
    try{
        await studentModel.findOne({_id:id}).deleteOne()
        .then(() => res.send("deleted successfully"))
    } catch {
        return res.send("Student does not exist")
    }
}


module.exports = { displayStudents, addStudent, getStudent, deleteStudent }