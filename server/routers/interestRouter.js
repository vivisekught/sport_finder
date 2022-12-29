const Router = require('express')
const router = new Router()
const interestController = require('../controllers/interestController')


router.post('/', interestController.create)
router.get('/', interestController.getAll)

module.exports = router