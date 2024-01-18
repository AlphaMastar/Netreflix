const MysqlExcute = require('../utils/mysql');
const sql = require('../mapper/gloveSql');

module.exports = {
    async getGloveList(data) {
        return await MysqlExcute(sql, data);
    }
}