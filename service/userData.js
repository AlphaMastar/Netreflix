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

module.exports = {
    login(req,res){
        var param = req.query
        if (db.query(sql.queryById, param.username) = param.password) {
            console.log(data)
            return true;
        }
        else return false
    },
    register(req,res){
        var param = req.query
        db.query(sql.insert, param,(err, data) => {
            if (err) return console.log(err.message);
            if (data.length === 0) return console.log('数据为空');
            return false
        })
    },
}
