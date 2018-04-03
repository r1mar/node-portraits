'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');

var multer =  require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

/* GET home page. */
router.get('/', controller.index);

router.post('/image/create', upload.single('uploadFile'), controller.imageCreate);

module.exports = router;