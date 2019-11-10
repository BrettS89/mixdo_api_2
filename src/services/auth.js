const MySql = require('../db/mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config');
const mysql = new MySql();

exports.getOneUser = async (getBy, data) => {
  const sql = `
    SELECT * FROM users
    WHERE ${getBy} = ?;
  `;
  return await mysql.queryOne(sql, [data]);
}

exports.checkPassword = (password, fetchedPassword) => {
  if (!bcrypt.compareSync(password, fetchedPassword)) {
    throw {
      error: new Error('invalid credentials'),
      status: 401,
    }
  }
  return true;
};

exports.createUser = async (data) => {
  const { email, username, password, os } = data;
  const ePassword = bcrypt.hashSync(password, 10)
  const sql = "INSERT INTO users (email, username, password, os) VALUES ?";
  await mysql.insert(sql, [[[email, username, ePassword, os]]]);
};

exports.createToken = (id) => {
  return jwt.sign({ user: id }, keys.jwtSecret, { expiresIn: 3400 });
};
