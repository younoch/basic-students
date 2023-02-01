const studentsModel = require("../models/StudentsModel.js")

//Create  Data

exports.InsertsStudents = (req, res) => {
    let reqBody = req.body

    studentsModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err });
        } else {
            res.status(201).json({ status: "Success", data: data })
        }
    })
}

//Read  Data

exports.ReadStudents = (req, res) => {
    let Query = {}
    let Projection = "name roll class remarks"

    studentsModel.find(Query, Projection, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err });
        } else {
            res.status(201).json({ status: "Success", data: data })
        }
    })
}


//Update Data

exports.UpdateStudents = (req, res) => {
    let id = req.params.id
    let Query = {_id: id}
    let reqBody = req.body
  
    
    studentsModel.updateOne(Query, reqBody, (err, data) => {
        console.log(data);
        if (err) {
            res.status(400).json({ status: "fail", data: err });
        } else {
            res.status(200).json({ status: "Success", data: data })
        }
    })
}
//Delete Data

exports.DeleteStudents = (req, res) => {
    let id = req.params.id
    let Query = {_id: id}
    
    studentsModel.remove(Query, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err });
        } else {
            res.status(200).json({ status: "Success", data: data })
        }
    })
}