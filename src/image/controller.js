'use strict';

const errorhandler = function(res) {
        return function(error) {
          console.log('ERROR:', error); // print error;
          res.status(500).send(error.message);
        };
      }

exports.index = function (req, res, next) {
  res.render('image/index');
};

exports.imageCreate = function (req, res, next) {
  const db = require('../db').instance;

  db.one('INSERT INTO images(name, mimetype, size, file) VALUES($1, $2, $3, $4) RETURNING id', 
          [req.file.originalname, req.file.mimetype, req.file.size, req.file.buffer])
    .then(data => {  
      res.json({
        id: data.id
      });
    })
    .catch(errorhandler(res));

}

exports.imageDelete = function(req, res, next) {
  const db = require('../db').instance;

  db.result("DELETE FROM images WHERE id = $1", [ req.id ])
    .then(data => { 
      res.status(201);
      res.json(data);
    })
    .catch(errorhandler(res));
}

exports.imageRead = function(req, res, next) {
  const db = require('../db').instance;

  db.one("SELECT * FROM images WHERE id = $1", [req.params.id])
    .then(data => {
      res.status(200);
      res.setHeader('Content-Length', data.file.length)
      res.setHeader('Content-Type', data.mimetype)
      res.write(data.file, 'binary')
      res.end();
    }).catch(errorhandler(res))
}