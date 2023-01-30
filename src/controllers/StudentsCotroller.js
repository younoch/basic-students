const studentsModel = require("../models/StudentsModel")

exports.InsertsStudents = (req, res) => {
    let reqBody = req.body
    console.log("InsertsStudents");

    studentsModel.create(reqBody, (err) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err });
        } else {
            res.status(201).json({status: "Sucess", data: data})
        }
    })
}