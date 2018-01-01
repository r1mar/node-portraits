'use strict';
var i18n = require("i18n");

exports.index = function(req, res, next) {
  res.send(i18n.__("user[\"respond with a resource\"]"));
};