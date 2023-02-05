var jwt = require('jsonwebtoken');

exports.createToken = (req, res)=> {
    let Payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {name: "Nawa Noor", city: "Dhaka", admin: true}
    }

    let Token = jwt.sign(Payload, "SecretKey123");

    res.send(Token)
}

exports.decodeToken = (req, res)=> {
    let Token = req.headers['token-key']

    jwt.verify(Token, "SecretKey123", (err, decoded) => {
        if (err) {
            res.status(401).json({status: "Invalid Token", data: err})
        } 
            else {
                res.status(200).json({status: "valid token", data: decoded})
            }
        
    })

    res.send(Token)
}