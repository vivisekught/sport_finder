const {UserData} = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class User_dataController {
    async create(req, res, next) {
        try {
            const {name, data_of_birthday, country, city, phone_number, gender, weight, height, user_id} = req.body
            const {photo} = req.files
            let filename = uuid.v4() + ".jpg"
            await photo.mv(path.resolve(__dirname, "..", "static", filename))

            const training = await UserData.create({
                name,
                data_of_birthday,
                country,
                city,
                phone_number,
                gender,
                weight,
                height,
                user_id,
                photo: filename
            })
            return res.json(training)
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

module.exports = new User_dataController()