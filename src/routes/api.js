const express = require("express");
const TokenIssueControllar = require("../controllers/TokenIssueControllar.js")
const HelloController = require("../controllers/HelloController")
const StudentsController = require("../controllers/StudentsCotroller.js")
// const JWTPractice = require('../controllers/JWTPractice.js')
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware')

const router = express.Router();
// This my first ger Routing 
router.get("/hello-get" , HelloController.Hello);
router.post("/hello-post", HelloController.Hello);

// Mongoses
router.get("/token-issue", TokenIssueControllar.tokenIssue);

router.post("/insert-student",TokenVerifyMiddleware, StudentsController.InsertsStudents);
router.post("/insert-student",TokenVerifyMiddleware, StudentsController.InsertsStudents);
router.get("/read-student",TokenVerifyMiddleware, StudentsController.ReadStudents);
router.post("/update-student/:id",TokenVerifyMiddleware, StudentsController.UpdateStudents);
router.get("/delete-student/:id",TokenVerifyMiddleware, StudentsController.DeleteStudents);


//token handaler practice
/* router.get("/create-token", JWTPractice.createToken);
router.get("/decode-token", JWTPractice.decodeToken); */


module.exports = router