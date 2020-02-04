var connection = require("./connection.js");

//----------Helper function for generating MySQL syntax----------
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

//--------------Create the ORM object to perform SQL queries----------
var orm = {

//--------------Function that returns all Burgers---------------
	selectAll: function(input, cb) {

		var query = "SELECT * FROM " + input + ";";

		connection.query(query, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

//----------------Insert Burger---------
	insertOne: function(table, cols, vals, cb) {
		var query = "INSERT INTO " + table;

		query += " (";
		query += cols.toString();
		query += ") ";
		query += "VALUES (";
		query += printQuestionMarks(vals.length);
		query += ") ";

		connection.query(query, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

//-----------------Function to update Burger-------------
	updateOne: function(table, objColVals, condition, cb) {
		var query = "UPDATE " + table;

		query += " SET ";
		query += objToSql(objColVals);
		query += " WHERE ";
		query += condition;

		connection.query(query, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

//------------Export the orm--------------------
module.exports = orm;