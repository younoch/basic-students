const express = require('express')

const router = require("./src/routes/api.js")
const app = new express()
const bodyParser = require('body-parser')


// Security Middleware Import
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')
const mongoose = require('mongoose')


// Security Middleware Implement

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp()); 

// Request Rate Limiting

app.use(bodyParser.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 mininutes
    max: 100 // limit each  IP
})

app.use(limiter);

// MongoDB Database Connection

let URI = "mongodb://127.0.0.1/Students"
let OPTIONS = { user: '', pass: '' }
mongoose.set("strictQuery", false);

mongoose.connect(URI, OPTIONS, (err)=> {
    if (err) {
            console.log("hello", err);
    } else {
        console.log('Conection Sucess');
    }
    
})


app.use("/api/v1", router);


app.use('*', (req, res) => {
    res.status(404).json({ status: "fail", data: "Not found"})
})

module.exports = app;