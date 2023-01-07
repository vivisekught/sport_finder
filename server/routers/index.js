const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const user_primary_dataRouter = require('./user_primary_dataRouter')
const user_additional_dataRouter = require('./user_additional_dataRouter')
const interestRouter = require('./interestRouter')
const trainingRouter = require('./trainingRouter')
const levelRouter = require('./levelRouter')


router.use('/user', userRouter)
router.use('/user_primary_data', user_primary_dataRouter)
router.use('/user_additional_data', user_additional_dataRouter)
router.use('/interest', interestRouter)
router.use('/training', trainingRouter)
router.use('/level', levelRouter)

module.exports = router