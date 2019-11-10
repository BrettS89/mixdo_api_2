const MySql = require('../db/mysql');
const mysql = new MySql();

exports.inserTodo = async (data) => {
  const { user_id, todo_text, todo_tags } = data;
  const sql = `
    INSERT INTO todos (user_id, todo_text, todo_tags)
    VALUES ?
  `;
  await mysql.insert(sql, [[[user_id, todo_text, todo_tags]]]);
};

exports.getRecentTodo = async (user_id) => {
  const sql = `
    SELECT * FROM todos
    WHERE user_id = ?
    ORDER BY created_at
    DESC
  `;
  return await mysql.queryOne(sql, [user_id]);
};

exports.getMyTodos = async (user_id) => {
  const sql = `
    SELECT * FROM todos
    WHERE user_id = ?
    AND finished = false
    ORDER BY created_at
  `;
  return await mysql.query(sql, [user_id]);
};

exports.getMyTodoHistory = async (user_id) => {
  const sql = `
    SELECT * FROM todos
    WHERE user_id = ?
    AND finished = true
    ORDER BY created_at
    DESC
    LIMIT 50
  `;
  return await mysql.query(sql, [user_id]);
};

exports.finishTodo = async ({ user_id, todo_id }) => {
  const sql = `
    UPDATE todos
    SET finished = true
    WHERE id = ?
    AND user_id = ?
  `;
  return await mysql.query(sql, [todo_id, user_id]);
};

exports.deleteTodo = async ({ user_id, todo_id }) => {
  const sql = `
    DELETE FROM todos
    WHERE id = ?
    AND user_id = ?
  `;
  return await mysql.query(sql, [todo_id, user_id]);
};
