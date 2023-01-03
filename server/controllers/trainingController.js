const {Training} = require("../models/models");
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

class TrainingController {
    async create(req, res, next) {
        try {
            const {title, description, place, days, time, duration, levelId, interestId} = req.body
            const {photo} = req.files
            let filename = uuid.v4() + ".jpg"
            await photo.mv(path.resolve(__dirname, "..", "static", filename))

            const training = await Training.create({
                title,
                description,
                place,
                days,
                time,
                duration,
                levelId,
                interestId,
                photo: filename
            })
            return res.json(training)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let {levelId, user_interestId, limit, page} = req.query
            page = page || 1
            limit = limit || 19
            // skip first n trainings on the page
            let offset = page * limit - limit

            let trainings;
            if (!levelId && !user_interestId) {
                trainings = await Training.findAndCountAll({limit, offset})
            } else if (levelId && !user_interestId) {
                trainings = await Training.findAndCountAll({where: {levelId}, limit, offset})
            } else if (!levelId && user_interestId) {
                trainings = await Training.findAndCountAll({where: {user_interestId}, limit, offset})
            } else if (levelId && user_interestId) {
                trainings = await Training.findAndCountAll({where: {levelId, user_interestId}, limit, offset})
            }

            return res.json(trainings)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params // in trainingRouter we specify parameter `id`
            const training = await Training.findOne(
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

module.exports = new TrainingController()