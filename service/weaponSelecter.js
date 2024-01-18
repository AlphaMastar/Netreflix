const MysqlExcute = require('../utils/mysql');
const sql = require('../mapper/weaponSql');

module.exports = {
    async getWeaponList(data) {
        return await MysqlExcute(sql, data);
    }
}