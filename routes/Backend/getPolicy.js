var express = require('express');
var router = express.Router();
const controller=require('../../controller/Backend/getPolicies');

router.get('/',controller.getPolicy)
  
module.exports = router;