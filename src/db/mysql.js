const keys = require('../config');
const mysql = require('mysql');

class MySql {
  connection() {
    return mysql.createConnection({
      host: keys.db_host,
      user: keys.db_user,
      password: keys.db_password,
      database: keys.db_name,
    });
  }

  async query(sql, options) {
    const data = new Promise((resolve, reject) => {
      this.connection().query(sql, options, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    this.connection().end();
    return await data;
  }

  async queryOne(sql, options) {
    const data = new Promise((resolve, reject) => {
      this.connection().query(sql, options, (err, results, fields) => {
        if (err) {
          reject(err);
        } else if (data.length > 1) {
          const error = { 
            error: new Error('more than one record'),
            status: 500,
          };
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
    this.connection().end();
    return (await data)[0];
  }

  async insert(sql, options) {
    return await this.query(sql, options);
  }

  async update(sql, options) {
    return await this.query(sql, options);
  }

}

module.exports = MySql;
