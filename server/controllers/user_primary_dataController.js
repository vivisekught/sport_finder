const {UserPrimaryData} = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");

class User_primary_dataController {
    async create(req, res, next) {
        try {
            const {name, country, city, user_id} = req.body

            const user_data = await UserPrimaryData.create({
                name,
                country,
                city,
                user_id,
            })
            return res.json(user_data)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }



    async getOne(req, res, next) {
        try {
            const {id} = req.params // in trainingRouter we specify parameter `id`
            const user_data = await UserPrimaryData.findOne(
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

module.exports = new User_primary_dataController()