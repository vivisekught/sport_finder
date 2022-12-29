const ApiError = require('../error/ApiError')
class UserController {
    async registration(req, res){

    }

    async login(req, res){

    }

    async checkRegistration(req, res, next){
        const {id} = req.query
        if (!id) {
            return next(ApiError.notFound("Not specified ID"))
        }
        res.json(id)
    }
}

module.exports = new UserController()