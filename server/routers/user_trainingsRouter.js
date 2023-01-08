const Router = require('express')
const router = new Router()
const userTrainingController = require('../controllers/user_trainingController')
const checkRole = require("../middleware/checkRoleMiddleware");


router.post('/', checkRole('STUDENT'), userTrainingController.create)
router.get('/', userTrainingController.getAll)
router.put('/:id', userTrainingController.update)

module.exports = router