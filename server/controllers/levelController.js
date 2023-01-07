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

    async update(req, res, next) {
        try {
            const params = req.params
            const body = req.body
            const level = await Level.update(body, {where: params})
            return res.json(level)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }
    async delete(req, res, next) {
        try {
            const {id} = req.params
            const level = await Level.destroy({where: {id}})
            return res.json(level)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params // in trainingRouter we specify parameter `id`
            const level = await Level.findOne(
                {
                    where: {id},
                }
            )
            res.json(level)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }
}

module.exports = new LevelController()