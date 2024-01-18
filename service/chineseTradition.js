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
    },
    async getWriterByName(data) {
        return await MysqlExcute(sql.queryWriterByName, data);
    },
    async getPoemByParams(data) {
        const query = sql.queryPoemByParams;
        const sentence_sql = ' `sentence` like ? ';
        const from_sql = ' `from` like ? ';
        if (data.get('sentence') && data.get('from')) {
            query = query + sentence_sql + 'and' + from_sql;
            return await MysqlExcute(query, [data.get('sentence'), data.get('from')]);
        } else if (data.get('sentence')) {
            query = query + sentence_sql;
            return await MysqlExcute(query, data.get('sentence'));
        } else if (data.get('from')) {
            query = query + from_sql;
            return await MysqlExcute(query, data.get('from'));
        } else {
            return null;
        };
    },
}