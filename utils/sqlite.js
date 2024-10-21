const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./Netreflix.db');

function MysqlExcute(sql, data){
    return new Promise((resolve, reject) => {
        db.all(sql, data, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

module.exports = MysqlExcute