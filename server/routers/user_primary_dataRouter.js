const Router = require('express')
const router = new Router()
const user_primary_dataController = require('../controllers/user_primary_dataController')


router.post('/', user_primary_dataController.create)
router.get('/:userId', user_primary_dataController.getOne)
router.put('/:userId', user_primary_dataController.update)

module.exports = router