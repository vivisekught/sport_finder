const Router = require('express')
const router = new Router()
const userInterestController = require('../controllers/user_interestController')
const checkRole = require("../middleware/checkRoleMiddleware");


router.post('/', checkRole('STUDENT'), userInterestController.create)
router.get('/', userInterestController.getAll)
router.put('/:id', userInterestController.update)

module.exports = router