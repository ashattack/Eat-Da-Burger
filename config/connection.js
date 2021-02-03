const util = require('util');
const mysql = require("mysql");

var connection;

if (process.env.JAWSDB_MARIA_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "rootroot",
        database: "burger_db"
    })
}

connection.connect()

connection.query = util.promisify(connection.query, console.log("connected"))

module.exports = connection;
