'use strict';
var i18n = require('i18n');

var setLocale = function(req, res, lang) {
  res.cookie('nodepage-locale', lang, { maxAge: 900000, httpOnly: true });
  res.redirect('/');
};

exports.setEnglish = function(req, res, next) {
  setLocale(req, res, 'en');
};

exports.setGerman = function(req, res, next) {
  setLocale(req, res, 'de');
};

exports.setRussian = function(req, res, next) {
  setLocale(req, res, 'ru');
};