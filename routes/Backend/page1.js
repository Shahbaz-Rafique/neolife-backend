var express = require('express');
var router = express.Router();
const controller=require('../../controller/Backend/page1');

router.post('/',controller.AddPage)
  
module.exports = router;