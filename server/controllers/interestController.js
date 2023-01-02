const {Interest, Level} = require("../models/models");
const ApiError = require("../error/ApiError");

class InterestController {
    async create(req, res, next) {
        try {
            const {title} = req.body
            const interest = await Interest.create({title})
            return res.json(interest)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getAll(req, res) {
        const levels = await Level.findAll()
        return res.json(levels)
    }
}

module.exports = new InterestController()