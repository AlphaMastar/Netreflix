const MysqlExcute = require('../utils/mysql');
const sql = require('../mapper/musicSql');

module.exports = {
    async getMusicList(data) {
        return await MysqlExcute(sql, data);
    }
}