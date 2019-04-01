const express = require('express')
const router = express.Router()
const NotificationController=require('../Controllers/NotificationController')


/* GET users listing. */
router.post('/create',[], NotificationController.create);
router.get('/list',[], NotificationController.list);


module.exports = router;
