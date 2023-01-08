const Router = require('express')
const router = new Router()
const user_additional_dataController = require('../controllers/user_dataController')


router.post('/', user_additional_dataController.create)
router.get('/:userId', user_additional_dataController.getOne)
router.put('/:userId', user_additional_dataController.update)

module.exports = router