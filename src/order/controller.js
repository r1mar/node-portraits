'use strict';

exports.index = function(req, res, next) {
  res.render('order/index');
};

exports.imageCreate = function(req, res, next) {
  res.json({
    id: 1
  });
}