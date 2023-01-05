const {UserAdditionalData} = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class User_additional_dataController {
    async create(req, res, next) {
        try {
            const {data_of_birthday, phone_number, gender, weight, height, user_id} = req.body
            const {photo} = req.files
            let filename = uuid.v4() + ".jpg"
            await photo.mv(path.resolve(__dirname, "..", "static", filename))

            const user_data = await UserAdditionalData.create({
                data_of_birthday,
                phone_number,
                gender,
                weight,
                height,
                user_id
            })
            return res.json(user_data)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }



    async getOne(req, res, next) {
        try {
            const {id} = req.params // in trainingRouter we specify parameter `id`
            const user_data = await UserAdditionalData.findOne(
                {
                    where: {id},
                }
            )
            res.json(user_data)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }
}

module.exports = new User_additional_dataController()