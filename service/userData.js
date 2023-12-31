const MysqlExcute = require('../utils/mysql');
const sql = require('../mapper/userSql');

module.exports = {
    async getUserList(sql, data) {
        return await MysqlExcute(sql, data);
    }
}