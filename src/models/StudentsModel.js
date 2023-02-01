const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    name: String,
    roll: String,
    class: String,
    remarks: String
});

const studentsModel = mongoose.model('students', DataSchema);

module.exports = studentsModel