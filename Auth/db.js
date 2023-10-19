const mysql = require('mysql2');

// create a new MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '12345678',
  database: 'employee_db'
});
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
  console.log(connection.query)
});

// close the MySQL connection
// connection.end();
module.exports = connection; 