const {Training, UserTraining} = require("../models/models");
const uuid = require('uuid')
const uniqid = require('uniqid')
const path = require('path')
const ApiError = require('../error/ApiError')
const {validationResult} = require("express-validator");

class TrainingController {
    async create(req, res, next) {
        try {

            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return next(ApiError.notFound(errors))
            }


            const {title, description, place, days, date, time, duration, levelId, interestId} = req.body
            const {photo} = req.files
            let filename = uuid.v4() + ".jpg"
            await photo.mv(path.resolve(__dirname, "..", "static", filename))

            let unique_code = uniqid.time()
            console.log(unique_code)

            let coach_id = req.user.id

            const training = await Training.create({
                title,
                description,
                place,
                days,
                date,
                time,
                duration,
                levelId,
                interestId,
                coach: coach_id,
                code: unique_code,
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

    async getAllStudent(req, res, next) {
        try {
            let {code} = req.body
            const students = await UserTraining.findAll({where: {code}})
            console.log(students)

            return res.json(students)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {code} = req.params
            const training = await Training.findOne(
                {
                    where: {code},
                }
            )
            res.json(training)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const params = req.params
            const body = req.body
            const {photo} = req.files

            if (photo) {
                let filename = uuid.v4() + ".jpg"
                await photo.mv(path.resolve(__dirname, "..", "static", filename))
                body.photo = filename
            }

            const training = await Training.update(body, {where: params})
            return res.json(training)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {code} = req.params
            const training = await Training.destroy(
                {
                    where: {code}
                })
            return res.json(training)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }
}

module.exports = new TrainingController()