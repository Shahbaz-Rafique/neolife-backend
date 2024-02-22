var express = require('express');
var router = express.Router();
const multer = require("multer");
const storageConfig = require("../../utils/multer");
const controller=require('../../controller/Backend/register');

const upload = multer({ storage: storageConfig.storage });


router.post('/',upload.single("image"),controller.AddConsultant)
  
module.exports = router;