const mysql = require('mysql')
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,         
    password: process.env.MYSQL_PASSWORD,     
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})

function MysqlExcute(sql, data){
    return new Promise ((resolve, reject) => {
        try{
            pool.getConnection(function(err,connection) {
                if (err != null) {reject(err)};
                connection.query(sql, data, function(err, result) {
                    try {
                        resolve(result);
                    } catch {
                        reject(err);
                    };
                    pool.releaseConnection(connection);
                });
            });
        } catch(err){
            console.log(err);
            reject(err);
        };
    });
}

module.exports = MysqlExcute