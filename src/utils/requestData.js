module.exports = {
  signup: {
    email: 'string',
    username: 'string',
    password: 'string',
    os: 'string',
  },
  login: {
    email: 'string',
    password: 'string',
  },
  addTodo: {
    user_id: 'number',
    todo_text: 'string',
    todo_tags: 'string',
  },
  finishTodo: {
    user_id: 'number',
    todo_id: 'number',
  },
  deleteTodo: {
    user_id: 'number',
    todo_id: 'number',
  },
  likeTodo: {
    user_id: 'number',
    todo_id: 'number',
  },
};
