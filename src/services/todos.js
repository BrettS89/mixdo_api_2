const MySql = require('../db/mysql');
const mysql = new MySql();

exports.getTodos = async user => {
  const sql = `
    SELECT * FROM todos
    INNER JOIN follows
    ON follower_id = ?
    INNER JOIN users
    ON follows.folowee_id = users.id
    WHERE user_id = follows.followee_id
    ORDER BY todos.created_at
    DESC
    LIMIT 30
  `;
  return await mysql.query(sql, [user]);
};

exports.getTodosScroll = async (user, date) => {
  const sql = `
    SELECT * FROM todos
    INNER JOIN follows
    ON follower_id = ?
    INNER JOIN users
    ON follows.folowee_id = users.id
    WHERE user_id = follows.followee_id
    AND todos.created_at < ?
    ORDER BY todos.created_at
    DESC
    LIMIT 30
  `;
  return await mysql.query(sql, [user, date]);
};

exports.discoverTodos = async user => {
  const sql = `
    SELECT * FROM todos
    INNER JOIN follows
    ON follower_id = ?
    INNER JOIN users
    ON follows.folowee_id = users.id
    ORDER BY todos.created_at
    DESC
    LIMIT 30
  `;
  return await mysql.query(sql, [user]);
};

exports.discoverTodosScroll = async (user, date) => {
  const sql = `
    SELECT * FROM todos
    INNER JOIN follows
    ON follower_id = ?
    INNER JOIN users
    ON follows.folowee_id = users.id
    AND todos.created_at < ?
    ORDER BY todos.created_at
    DESC
    LIMIT 30
  `;
  return await mysql.query(sql, [user, date]);
};

exports.likeTodo = async ({ user_id, todo_id }) => {
  const sql = `
    INSERT INTO likes (user_id, todo_id)
    VALUES = ?
  `;
  return await mysql.insert(sql, [[[user_id, todo_id]]])
};
