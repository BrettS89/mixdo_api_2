const MySql = require('../db/mysql');
const myTodos = require('../services/myTodos');

class TodoModel {
  constructor(data) {
    this.id = data.id;
    this.created_at = data.created_at;
    this.user_id = data.user_id;
    this.todo_text = data.todo_text;
    this.todo_tags = data.todo_tags;
    this.image_url = data.image_url;
    this.finished = data.finished;
    this.flagged = data.flagged;
  }

  save() {
    const todo = {
      user_id: this.user_id,
      todo_text: this.todo_text,
      todo_tags: this.todo_tags,
    };
    myTodos.inserTodo(todo);
  }

  get() {

  }
}

module.exports = TodoModel;
