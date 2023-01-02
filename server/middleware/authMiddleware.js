const errors = require("../utils/Constants")
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    // because we are interested in post, get, delete
    if (req.method === "OPTIONS"){
        next()
    }

    try {
        // we need get token by first index, because 0 index is token type
        const token = req.headers.authorization.split(' ')[1]
        if (!token){
            return res.status(errors.unauthorized).json({message: "Unauthorized user"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY) // check token validation
        req.user = decoded
        next()

    } catch (e) {
       res.status(errors.unauthorized).json({message: "Unauthorized user"})
    }
};