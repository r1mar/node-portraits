'use strict';

exports.index = function (req, res, next) {
  res.render('order/index');
};

exports.imageCreate = function (req, res, next) {
  const options = {
    // Initialization Options
    promiseLib: require('bluebird')
  };
  const pgp = require('pg-promise')(options);
  const db = pgp('postgres://localhost:5432/tm-portraits');

  db.one('INSERT INTO image(name, mimetype, size, file) VALUES($1, $2, $3, $4) RETURNING id', 
          [req.file.originalname, req.file.mimetype, req.file.size, req.file.buffer])
    .then(data => {  
      res.json({
        id: data.id
      });
    })
    .catch(error => {
        console.log('ERROR:', error); // print error;
        res.status(500).send(error.message);
    });

  //INSERT INTO pups (name, breed, age, sex) VALUES ('Tyler', 'Retrieved', 3, 'M');
  //
  //
  //
  //

}