var jwt = require('jsonwebtoken');

exports.tokenIssue = (req, res)=> {
    let Payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {name: "Nawa Noor", city: "Dhaka", admin: true}
    }

    let Token = jwt.sign(Payload, "SecretKey123");

    res.send(Token)
}