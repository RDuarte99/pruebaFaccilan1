// conection.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my-secret-pw',
  database: 'my_database'
});

function connect() {
  return new Promise((resolve, reject) => {
    connection.connect(err => {
      if (err) {
        return reject(err);
      }
      resolve('Conexión exitosa a la base de datos');
    });
  });
}

function close() {
  connection.end();
}

module.exports = { connect, close };