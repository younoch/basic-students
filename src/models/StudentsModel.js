const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    name: {type: String},
    roll: {
        type: Number,
        min: [6, 'Min value is 6, but supplied value is ={VALUE}'],
        max: [12, 'max value is 12, but supplied value is ={VALUE}'],
    },
    class: {
        type: String,
        validate: {
            validator: (value) => {

                if (value.length >= 2) {
                    return true
                } else {
                    return false
                }
            },
            massage: " it's length too short"
        }
    },
    remarks: {type: String, default: "No Remarks"}
}, {versionKey: false});

const studentsModel = mongoose.model('students', DataSchema);

module.exports = studentsModel