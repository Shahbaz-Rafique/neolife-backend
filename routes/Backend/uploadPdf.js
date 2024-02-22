var express = require('express');
var router = express.Router();
const multer = require("multer");
const storageConfig = require("../../utils/multer");
const controller=require('../../controller/Backend/uploadpdf');

const upload = multer({ storage: storageConfig.storage });


router.post('/',upload.single("pdf"),controller.UploadPDF)
  
module.exports = router;