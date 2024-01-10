var express = require('express');
var router = express.Router();
const controller=require('../../controller/Login/getProfile')

router.get('/', controller.getProfile)
  
module.exports = router;