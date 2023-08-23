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
    getMusicInfo(req,res){
        // 数据库查询
        var param = req.query
        db.query(sql.queryById,param, (err, data) => {
            if (err) return console.log(err.message); // 连接失败
            if (data.length === 0) return console.log('数据为空'); // 数据长度为0 则没有获取到数据
            // 否则获取成功，将结果返回给客户端res.send
            res.send({
                status: 0,
                msg: '数据获取成功',
                data
            })
        })
    }
}