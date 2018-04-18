'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');

var multer =  require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

/* GET home page. */
router.get('/', controller.index);

router.get('/:id', upload.single('uploadFile'), controller.imageRead);
router.post('/', upload.single('uploadFile'), controller.imageCreate);
router.delete('/:id', upload.single('uploadFile'), controller.imageDelete);

module.exports = router;