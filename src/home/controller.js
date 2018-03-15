'use strict';

var indexModel = require('./index.model'),
    contactModel = require('./contact.model'),
    imprintModel = require('./imprint.model');

exports.index = function(req, res, next) {
  res.render('home/index', indexModel);
};

exports.contact = function(req, res, next) {
  res.render('home/contact', contactModel);
};

exports.imprint = function(req, res, next) {
  res.render('home/imprint', imprintModel);
};

exports.gtc = function(req, res, next) {
  res.render('home/gtc');
};