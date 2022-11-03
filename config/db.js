let mysql = require("mysql");

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 8889,
  database: 'second',

  insecureAuth: true
});

connection.connect();

module.exports = connection;