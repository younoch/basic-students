const express = require("express");
const HelloController = require("../controllers/HelloController")
const StudentsController = require("../controllers/StudentsCotroller.js")
const router = express.Router();



// This my first ger Routing 
router.get("/hello-get" , HelloController.Hello);
router.post("/hello-post", HelloController.Hello);


// Mongoses

router.post("/insert-student", StudentsController.InsertsStudents);
router.get("/read-student", StudentsController.ReadStudents);
router.post("/update-student/:id", StudentsController.UpdateStudents);
router.get("/delete-student/:id", StudentsController.DeleteStudents);

module.exports = router