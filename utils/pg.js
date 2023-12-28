const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: "postgres://default:Xk4jdycLfU5O@ep-wandering-cell-42846555-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
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