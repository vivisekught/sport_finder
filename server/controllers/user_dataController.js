const {UserData} = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const {validationResult} = require("express-validator");

class User_dataController {
    async create(req, res, next) {

        try {

            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return next(ApiError.notFound(errors))
            }

            const body = req.body
            console.log(req.body)

            if (req.files) {
                const {photo} = req.files
                let filename = uuid.v4() + ".jpg"
                await photo.mv(path.resolve(__dirname, "..", "static", filename))
                body.photo = filename
            }

            const checking = await UserData.findOne({where: {userId: body.userId}})

            console.log(checking)

            if(checking){
                return next(ApiError.notFound(`Data for this user ${body.userId} already exists`))
            }

            const user_data = await UserData.create(body)
            return res.json(user_data)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {user_id} = req.params
            const user_data = await UserData.findOne(
                {
                    where: {user_id},
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

           if (req.files) {
                const {photo} = req.files
                let filename = uuid.v4() + ".jpg"
                await photo.mv(path.resolve(__dirname, "..", "static", filename))
                body.photo = filename
            }
            const user_data = await UserData.update(body, {where: params})

            return res.json(user_data)
        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

}

module.exports = new User_dataController()