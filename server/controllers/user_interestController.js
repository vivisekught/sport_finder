const {UserInterest} = require('../models/models')
const ApiError = require('../error/ApiError')


class User_interestController {
    async create(req, res, next) {
        try {
            const {userId, interestId} = req.body

            const interest = await UserInterest.create({
                userId,
                interestId
            })
            return res.json(interest)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let {userId, interestId} = req.query

            let trainings;
            if (!userId && !interestId) {
                trainings = await UserInterest.findAll()
            } else if (userId && !interestId) {
                trainings = await UserInterest.findAll({where: {userId}})
            } else if (!userId && interestId) {
                trainings = await UserInterest.findAll({where: {interestId}})
            } else if (userId && interestId) {
                trainings = await UserInterest.findAll({where: {userId, interestId}})
            }

            return res.json(trainings)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const params = req.params
            const body = req.body

            const interests = await UserInterest.update(body, {where: params})

            return res.json(interests)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

}

module.exports = new User_interestController()