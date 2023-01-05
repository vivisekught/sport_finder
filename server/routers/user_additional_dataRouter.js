const Router = require('express')
const router = new Router()
const user_additional_dataController = require('../controllers/user_additional_dataController')


router.post('/', user_additional_dataController.create)
router.get('/', user_additional_dataController.getOne)

module.exports = router