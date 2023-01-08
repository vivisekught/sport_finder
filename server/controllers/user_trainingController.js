const {UserTraining} = require('../models/models')
const ApiError = require('../error/ApiError')


class User_trainingController {
    async create(req, res, next) {
        try {
            const {userId, trainingId} = req.body

            const training = await UserTraining.create({
                userId,
                trainingId
            })
            return res.json(training)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let {userId, trainingId} = req.query

            let trainings;
            if (!userId && !trainingId) {
                trainings = await UserTraining.findAll()
            } else if (userId && !trainingId) {
                trainings = await UserTraining.findAll({where: {userId}})
            } else if (!userId && trainingId) {
                trainings = await UserTraining.findAll({where: {trainingId}})
            } else if (userId && trainingId) {
                trainings = await UserTraining.findAll({where: {userId, trainingId}})
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

            const trainings = await UserTraining.update(body, {where: params})

            return res.json(trainings)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

}

module.exports = new User_trainingController()