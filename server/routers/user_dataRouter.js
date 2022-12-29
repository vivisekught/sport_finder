const Router = require('express')
const router = new Router()
const user_dataController = require('../controllers/user_dataController')


router.post('/', user_dataController.create)
router.get('/', user_dataController.getAll)

module.exports = router