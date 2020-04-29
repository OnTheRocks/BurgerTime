var mysql = require("mysql");
var connection;


if (process.env.JAWSDB_URL) {
		connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
		connection = mysql.createConnection({
			port: 3306,
			host: 'localhost',
			user: 'OnTheRocks',
			password: 'OnTheRocks',
			database: 'burgers_db'
	});
}

//------------------Make the connection to MySQL------------------
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

//-------------Export connection for ORM use-------------------------
module.exports = connection;