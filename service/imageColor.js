var mysql = require('mysql');
var $conf = require('../config/imageColorDatabaseConfig');
var $sql = require('../mapper/imageColorSql');
 
// 使用连接池，提升性能
var pool  = mysql.createPool($conf.mysql);

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {res.send(ret);}
};
 
module.exports = {
	add: function (req, res, next, HexColor) {
		pool.getConnection(function(err, connection) {
            let param = [req.query.url, HexColor];
			connection.query($sql.insert, param, function(err, result) {
				if (result == '') {
					result = 'null';
				}
				jsonWrite(res, result);
				connection.release();
			});
		});
	},
	delete: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			let param = req.query.url;
			connection.query($sql.delete, param, function(err, result) {
				if(result.affectedRows > 0) {
					result = {
						code: 200,
						msg:'删除成功'
					};
				} else {
					result = void 0;
				}
				jsonWrite(res, result);
				connection.release();
			});
		});
	},
	update: function (req, res, next) {
		let param = req.body;
		if(param.name == null || param.age == null || param.id == null) {
			jsonWrite(res, undefined);
			return;
		}
 
		pool.getConnection(function(err, connection) {
			connection.query($sql.update, [param.name, param.age, +param.id], function(err, result) {
				if(result.affectedRows > 0) {
					res.render('suc', {
						result: result
					});
				} else {
					res.render('fail',  {
						result: result
					});
				}
 
				connection.release();
			});
		});
 
	},
	queryByUrl: function (req, res, next) {
		let param = req.query;
		return new Promise ((resolve, reject) => {
			pool.getConnection(function(err, connection) {
				connection.query($sql.queryByUrl, param.url, function(err, result) {
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
	queryAll: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			connection.query($sql.queryAll, function(err, result) {
				jsonWrite(res, result);
				connection.release();
			});
		});
	}
 
};