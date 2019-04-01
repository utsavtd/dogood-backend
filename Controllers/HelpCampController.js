'use strict'
const {
    check,
    validationResult
} = require('express-validator/check');
const moment = require('moment');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const HelpCamp = require('../Models/HelpCamp')

exports.create = [
    check('name', 'Please enter type').isString().isLength(2),
    check('description', 'Please enter type').isString().isLength(2),
    check('address', 'Please enter type').isString().isLength(2),

    async (req, res, next) => {
        try {

            console.log('create@HelpCampcontroller')

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(422).json({
                    message: "Invalid fields",
                    payload: errors.array()
                })
            }
            let help = await HelpCamp.create(req.body)
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
       let help=await HelpCamp.find({})
       console.log(help)
        return res.json(help)

    }
