'use strict'
const {
    check,
    validationResult
} = require('express-validator/check');
const moment = require('moment');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../Models/User')

exports.signUp = [
    check('first_name', 'Please enter first name').isString().isLength(2),
    check('last_name', 'Please enter last name').isString().isLength(2),
    check('email', 'Please enter valid email').isString().isLength(5).isEmail().custom(async (value) => {
        let user = await User.findOne({
            email: value
        })
        if (user) {
            return Promise.reject("User already registered")
        }
    }),
    check('password', 'Please enter valid password').isString().isLength(5),

    async (req, res, next) => {
        try {

            console.log('signUp@UserController')

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(422).json({
                    message: "Invalid fields",
                    payload: errors.array()
                })
            }
            let user = await User.create(req.body)
            if (user) {
                return res.json(user)
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({
                message: 'Error : There was an error registering user. Please try again.',
                payload: []
            })
        }

    }
]

exports.signIn = [
    check('email', 'Please enter email').isString().isLength(4),
    check('password', 'Please enter passwprd').isString().isLength(5),
    check('type', 'Please choose user type ').isString().isLength(4),
    async (req, res, next) => {
        console.log(req.body)
        let user = await User.findOne({
            email: req.body.email,
            type: req.body.type
        })
        if (!user) {
            return res.status(401).json({
                message: "Invalid login"
            })
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            return res.json({
                message: 'OK',
                payload: user
            })
        }

        return res.status(401).json({
            message: "Invalid login"
        })

    }
]