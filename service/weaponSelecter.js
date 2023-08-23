var dbInfo = require('../config/db');
var mysql = require("mysql")
var sql = require('../mapper/sql');

var db = mysql.createPool({
    host: dbInfo.host, 
    user: dbInfo.user,         
    password: dbInfo.password,     
    database: dbInfo.database,
    connectionLimit: 20
});