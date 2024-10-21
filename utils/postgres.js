const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    max: 10,
    idleTimeoutMillis: 30000,
});

function PostgresExecute(sql, data) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, release) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                client.query(sql, data, (err, result) => {
                    release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result.rows);
                    }
                });
            }
        });
    });
}

module.exports = PostgresExecute;