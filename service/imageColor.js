var mysql = require('mysql');
var $conf = require('../config/imageColorDatabaseConfig');
var $sql = require('../mapper/imageColorSql');
 
// 使用连接池，提升性能
var pool  = mysql.createPool($conf.mysql);
 
module.exports = {
	add(Url, HexColor) {
		return new Promise((resolve, reject) => {
			pool.getConnection(function(err, connection) {
				let param = [Url, HexColor];
				connection.query($sql.insert, param, function(err, result) {
					try {
						resolve(result);
					} catch {
						reject(err);
					}
					connection.release();
				});
			});
		})
	},
	delete(Url) {
		return new Promise((resolve, reject) => {
			pool.getConnection(function(err, connection) {
				connection.query($sql.delete, Url, function(err, result) {
					if(result.affectedRows > 0) {
						result = {
							code: 200,
							msg:'删除成功'
						}; resolve(result);
					} else {
						reject(err);
					}
					connection.release();
				});
			});
		});
	},
	update(Url, HexColor) {
		return new Promise((resolve, reject) => {
			if(Url == null || HexColor == null) {
				resolve(undefined);
				return;
			}
			pool.getConnection(function(err, connection) {
				connection.query($sql.update, [param.name, param.age, +param.id], function(err, result) {
					if(result.affectedRows > 0) {
						resolve('success')
					} else {
						reject('file')
					}
					connection.release();
				});
			});
		});
	},
	queryByUrl(Url) {
		return new Promise ((resolve, reject) => {
			pool.getConnection(function(err, connection) {
				connection.query($sql.queryByUrl, Url, function(err, result) {
					var result = JSON.stringify(result[0],['RGB']);
					if (result == '') {
						result = null;
						reject(result);
					}else {
						resolve(result);
					};
					connection.release();
				});
			});
		});
	},
	queryAll() {
		return new Promise ((resolve, reject) => {
			pool.getConnection(function(err, connection) {
				connection.query($sql.queryAll, function(err, result) {
					try {
						resolve(result);
					} catch {
						reject(err);
					}
					connection.release();
				});
			});
		});
	}
};