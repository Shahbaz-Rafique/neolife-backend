var express = require('express');
var router = express.Router();
const controller=require('../../controller/Profile/updateProfile')

router.post('/', controller.UpdateProfile)
  
module.exports = router;