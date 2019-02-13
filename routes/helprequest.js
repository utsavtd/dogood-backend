const express = require('express')
const router = express.Router()
const HelpRequestController=require('../Controllers/HelpRequestController')


/* GET users listing. */
router.post('/create',[], HelpRequestController.create);
router.post('/list',[], HelpRequestController.list);


module.exports = router;
