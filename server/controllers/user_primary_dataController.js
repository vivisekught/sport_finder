const {UserPrimaryData} = require("../models/models");
const ApiError = require("../error/ApiError");

class User_primary_dataController {
    async create(req, res, next) {
        try {
            const {name, country, city, userId} = req.body

            const user_data = await UserPrimaryData.create({
                name,
                country,
                city,
                userId,
            })
            return res.json(user_data)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
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

    async update(req, res, next) {
        try {
            const params = req.params
            const body = req.body
            const user_data = await UserPrimaryData.update(body, {where: params})
            return res.json(user_data)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }
}

module.exports = new User_primary_dataController()