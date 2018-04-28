'use strict';

const errorhandler = function(res) {
        return function(error) {
          console.log('ERROR:', error); // print error;
          res.status(500).send(error.message);
        };
      }

exports.query = function(req, res, next) {
  const db = require('../db').instance;

  db.many("SELECT * FROM \"portrait-kinds\" ORDER BY price ASC")
    .then(data => {
      res.status(200);
      res.json(data);
    }).catch(errorhandler(res))
}