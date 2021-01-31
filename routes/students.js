const router = require("express").Router()
const { displayStudents, addStudent, getStudent, deleteStudent } = require("../controllers/student")

router.get("/",displayStudents)
router.post("/",addStudent)
router.get("/:id",getStudent)
router.delete("/:id",deleteStudent)

module.exports = router