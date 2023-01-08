const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const user_dataRouter = require('./user_dataRouter')
const interestRouter = require('./interestRouter')
const trainingRouter = require('./trainingRouter')
const levelRouter = require('./levelRouter')
const user_trainingsRouter = require('./user_trainingsRouter')
const user_interestRouter = require('./user_interestsRouter')

router.use('/user', userRouter)
router.use('/user_data', user_dataRouter)
router.use('/interest', interestRouter)
router.use('/training', trainingRouter)
router.use('/user_training', user_trainingsRouter)
router.use('/user_interest', user_interestRouter)
router.use('/level', levelRouter)

module.exports = router