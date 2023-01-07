const {Interest} = require("../models/models");
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
        const interests = await Interest.findAll()
        return res.json(interests)
    }

    async update(req, res, next) {
        try {
            const params = req.params
            const body = req.body
            const interest = await Interest.update(body, {where: params})
            return res.json(interest)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {title} = req.body
            const interest = await Interest.destroy({where: {title: title}})
            return res.json(interest)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params // in interestRouter we specify parameter `id`
            const training = await Interest.findOne(
                {
                    where: {id},
                }
            )
            res.json(training)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }
}

module.exports = new InterestController()