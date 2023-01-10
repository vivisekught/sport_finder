const { check } = require('express-validator');


user_validation = [
    check('email')
        .exists()
        .withMessage('email is required')
        .isEmail()
        .withMessage('email not valid'),

    check('password')
        .exists()
        .withMessage('password is required')
        .isLength({min: 6, max: 25})
        .withMessage('password must be more than 4 character')
        .matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
        .withMessage('password must include at least 6 character and contain one uppercase, one lower case, one special character, one number'),

    check('role')
        .custom(async (role) => {
        if(role !== "STUDENT" && role !== "COACH")
            throw new Error('enter correct role')
    }),
];


module.exports = user_validation

