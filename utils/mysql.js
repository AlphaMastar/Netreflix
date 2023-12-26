const mysql = require ('mysql')

const pool = mysql.createPool({
    host: '192.168.0.107',
    user: 'img',         
    password: 'Mcmef411',     
    database: 'img',
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