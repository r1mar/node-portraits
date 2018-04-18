const options = {
// Initialization Options
promiseLib: require('bluebird')
};
const pgp = require('pg-promise')(options);

exports.instance = pgp('postgres://localhost:5432/tm-portraits');