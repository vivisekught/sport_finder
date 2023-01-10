const { check } = require('express-validator');


user_data_validation = [
    check('name')
        .exists()
        .withMessage('name is required')
        .isLength({min: 2, max: 20})
        .withMessage('name must be more than 2 characters and less than 20'),

    check('country')
        .exists()
        .withMessage('country is required')
        .isLength({min: 2, max: 30})
        .withMessage('country must be more than 2 characters and less than 30'),

    check('city')
        .exists()
        .withMessage('city is required')
        .isLength({min: 2, max: 30})
        .withMessage('city must be more than 2 characters and less than 30'),

    check('date_of_birthday')
        .exists()
        .withMessage('date is required')
        .isDate({format: 'MM-DD-YYYY'})
        .withMessage('date type is required'),

    check('phone_number')
        .exists()
        .withMessage('phone number is required')
        .matches( /^[0-9]{10}$/)
        // .isMobilePhone('uk-UA')
        .withMessage('phone number is incorrect'),

    check('gender')
        .exists()
        .withMessage('gender is required')
        .custom(async (gender) => {
            if(gender !== "male" && gender !== "female")
                throw new Error('enter correct gender')
        }),

    check('weight')
        .exists()
        .withMessage('weight is required')
        .isDecimal()
        .isLength({min:15, max: 750})
        .withMessage('enter correct weight'),

    check('height')
        .exists()
        .withMessage('height is required')
        .isDecimal()
        .isLength({min:15, max: 250})
        .withMessage('enter correct height'),

];


module.exports = user_data_validation