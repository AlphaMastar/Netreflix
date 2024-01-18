const MysqlExcute = require('../utils/mysql');
const sql = require('../mapper/chineseTraditionSql');

module.exports = {
    async getPoemByID(data) {
        return await MysqlExcute(sql.queryPoemByID, data);
    },
    async getArticleByID(data) {
        return await MysqlExcute(sql.queryArticleByID, data);
    },
    async getWriterByID(data) {
        return await MysqlExcute(sql.queryWriterByID, data);
    }
}