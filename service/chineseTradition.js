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
        let params = [];
        let query = sql.queryPoemByParams;
        if (data.has('sentence')) {
            query += sql.sentence_query;
            params.push(data.get('sentence'));
        };
        if (data.has('from')) {
            query += sql.from_query;
            params.push(data.get('from'));
        };
        return await MysqlExcute(query, params);
    },
    async getArticleByParams(data) {
        let params = [];
        let query = sql.queryArticleByParams;
        if (data.has('title')) {
            query += sql.title_query;
            params.push(data.get('title'));
        };
        if (data.has('writer')) {
            query += sql.writer_query;
            params.push(data.get('writer'));
        };
        if (data.has('dynasty')) {
            query += sql.dynasty_query;
            params.push(data.get('dynasty'));
        };
        if (data.has('content')) {
            query += sql.content_query;
            params.push(data.get('content'));
        };
        return await MysqlExcute(query, params);
    }
}