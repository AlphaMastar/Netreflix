const MysqlExcute = require('../utils/mysql');
const sql = require('../mapper/gloveSql');

module.exports = {
    async getGloveList(sql, data) {
        return await MysqlExcute(sql, data);
    }
}