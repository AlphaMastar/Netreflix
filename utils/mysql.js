const mysql = require('mysql')
const config = require('../config')

const pool = mysql.createPool({
    host: config.database.host,
    user: config.database.user,         
    password: config.database.password,     
    database: config.database.database,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})

function MysqlExcute(sql, data){
    return new Promise ((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            console.log(err);
            connection.query(sql, data, function(err, result) {
                try {
                    resolve(result);
                } catch {
                    reject(err);
                };
                pool.releaseConnection(connection);
            });
        });
    });
}

module.exports = MysqlExcute