var express = require('express');
var router = express.Router();
const multer = require("multer");
const storageConfig = require("../../utils/multer");
const controller=require('../../controller/Profile/uploadfoto');

const upload = multer({ storage: storageConfig.storage });


router.post('/',upload.single("file"),controller.Uploadfoto)
  
module.exports = router;