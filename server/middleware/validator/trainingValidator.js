const {check} = require('express-validator');


training_validation = [
    check('title')
        .exists()
        .withMessage('title is required')
        .isLength({min: 2, max: 20})
        .withMessage('title must be more than 5 characters and less than 20'),

    check('description')
        .exists()
        .withMessage('description is required')
        .isLength({min: 10, max: 100})
        .withMessage('title must be more than 10 characters and less than 100'),

    check('place')
        .exists()
        .withMessage('place is required')
        .isLength({min: 5, max: 40})
        .withMessage('place must be more than 5 characters and less than 40'),

    check('days')
        .exists()
        .withMessage('days is required')
        .isLength({max: 50}),

    check('date')
        .exists()
        .withMessage('date is required')
        .isDate({format: 'MM-DD-YYYY'})
        .withMessage('date type is incorrect'),

    check('time')
        .exists()
        .withMessage('time is required')
        .isLength({max: 30})
        .withMessage('time is incorrect'),

    check('duration')
        .exists()
        .withMessage('duration is required')
        .isLength({max: 20}),

];

module.exports = training_validation

