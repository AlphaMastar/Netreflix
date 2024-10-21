const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    max: 10,
    idleTimeoutMillis: 30000,
    ssl: {
        rejectUnauthorized: false // 如果你使用的是自签名证书，可以设置为 false
    }
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