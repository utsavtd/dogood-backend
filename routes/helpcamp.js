const express = require('express')
const router = express.Router()
const HelpCampController=require('../Controllers/HelpCampController')


/* GET users listing. */
router.post('/create',[], HelpCampController.create);
router.get('/list',[], HelpCampController.list);


module.exports = router;
