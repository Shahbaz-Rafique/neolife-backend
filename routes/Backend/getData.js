var express = require('express');
var router = express.Router();
const controller=require('../../controller/Backend/getData');

router.get('/',controller.getData)
  
module.exports = router;