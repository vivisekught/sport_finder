const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {User, TrainingsList, InterestList} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        try{
            const {email, password, role} = req.body
            if (!email){
                return next(ApiError.notFound("Incorrect email"))
            }
            if (!password){
                return next(ApiError.notFound("Incorrect password"))
            }

            const candidate = await User.findOne({where: {email}})

            if(candidate){
                return next(ApiError.notFound("User with this email address already exists"))
            }

            const hashPassword = await bcrypt.hash(password, 4) // hash user password 4 times
            const user = await User.create({email, role, password: hashPassword})
            const trainingsList = await TrainingsList.create({userId: user.id})
            const interestList = await InterestList.create({userId: user.id})

            const token = generateJwt(user.id, user.email, user.role)
            return res.json({token})

        } catch (e) {
            next(ApiError.notFound(e.message))
        }

    }

    async login(req, res, next) {
        try {

            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if (!user) {
                return next(ApiError.notFound("User not found"))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)

            if (!comparePassword){
                return next(ApiError.internal("Incorrect password"))
            }
            const token = generateJwt(user.id, user.email, user.role)
            return  res.json({token})

        } catch (e) {
            next(ApiError.notFound(e.message))
        }
    }

    async checkRegistration(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()