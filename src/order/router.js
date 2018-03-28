'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');

/* GET home page. */
router.get('/', controller.index);

router.post('/image/create', controller.imageCreate);

module.exports = router;