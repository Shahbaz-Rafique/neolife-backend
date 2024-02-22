var express = require('express');
var router = express.Router();
const controller=require('../../controller/Backend/getClients');

router.get('/',controller.getClients)
  
module.exports = router;