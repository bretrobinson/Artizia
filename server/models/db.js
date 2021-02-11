const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
const { port } = require("../config/db.config.js");
var connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
  
});

module.exports = connection;
