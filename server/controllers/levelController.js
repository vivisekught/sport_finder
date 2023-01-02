const {Level} = require('../models/models')
const ApiError = require('../error/ApiError')

class LevelController {
    async create(req, res, next) {
        try {
            const {title} = req.body
            const level = await Level.create({title})
            return res.json(level)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getAll(req, res) {
        const levels = await Level.findAll()
        return res.json(levels)
    }
}

module.exports = new LevelController()