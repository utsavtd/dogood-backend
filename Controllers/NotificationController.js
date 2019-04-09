'use strict'
const {
    check,
    validationResult
} = require('express-validator/check');
const moment = require('moment');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Notification = require('../Models/Notification')

exports.create = [
    check('text', 'Please enter text').isString().isLength(2),

    async (req, res, next) => {
        try {

            console.log('create@Notificationcontroller')

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(422).json({
                    message: "Invalid fields",
                    payload: errors.array()
                })
            }
            let help = await Notification.create(req.body)
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
       let help=await Notification.find({})
        return res.json(help)

    }
