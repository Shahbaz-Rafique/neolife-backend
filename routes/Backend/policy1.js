var express = require('express');
var router = express.Router();
const multer = require("multer");
const storageConfig = require("../../utils/multer");
const controller=require('../../controller/Backend/policy1');

const upload = multer({ storage: storageConfig.storage });


router.post('/',upload.single("policy"),controller.AddPolicy)
  
module.exports = router;