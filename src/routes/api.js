const express = require("express");
const HelloController = require("../controllers/HelloController")
const StudentsController = require("../controllers/studentsCotroller.js")
const router = express.Router();

// This my first ger Routing 
router.get("/hello-get" , HelloController.Hello);
router.post("/hello-post", HelloController.Hello);


// Mongoses

router.post("/insert-student", StudentsController.InsertsStudents)

module.exports = router