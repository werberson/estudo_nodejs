var mysql = require('mysql');

function createDBConnection() {
    return  mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'estudo_nodejs'
    });
}

module.exports = function () {
  return createDBConnection;
};