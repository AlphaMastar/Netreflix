const MysqlExcute = require('../utils/sqlite');
const sql = require('../mapper/imageColorSql');

module.exports = {
	async imageColorAdd(data) {
		return await MysqlExcute(sql.insert, data);
	},
	async imageColorDelete(data) {
		return await MysqlExcute(sql.delete, data);
	},
	async imageColorUpdate(data) {
		return await MysqlExcute(sql.update, data);
	},
	async imageColorQueryByUrl(data) {
		return await MysqlExcute(sql.queryByUrl, data);
	},
	async imageColorQueryAll(data) {
		return await MysqlExcute(sql.queryAll, data);
	}
};