'use strict'
const {
    check,
    validationResult
} = require('express-validator/check');
const moment = require('moment');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const HelpRequest = require('../Models/HelpRequest')

exports.create = [
    check('type', 'Please enter type').isString().isLength(2),
    check('address', 'Please enter address').isString().isLength(2),
    // check('user_id', 'Please enter valid user_id').isString().isLength(5).custom(async (value) => {
    //     let user = await User.findOne({
    //         email: value
    //     })
    //     if (user) {
    //         return Promise.reject("User already registered")
    //     }
    // }),

    async (req, res, next) => {
        try {

            console.log('create@helprequestcontroller')

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                console.log(errors.array())
                return res.status(422).json({
                    message: "Invalid fields",
                    payload: errors.array()
                })
            }
            let help = await HelpRequest.create(req.body)
            if (help) {
                return res.json(help)
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

exports.list = 
    async (req, res, next) => {
       let help=await HelpRequest.find({}).populate('user_id')
       console.log(help)
        return res.json(help)

    }
