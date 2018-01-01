'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./controller');

/* GET home page. */
router.post('/en', controller.setEnglish);
router.post('/de', controller.setGerman);
router.post('/ru', controller.setRussian);

module.exports = router;
