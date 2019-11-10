const { errorHandler } = require('../handlers/errorHandlers');
const successHandler = require('../handlers/successHandler');
const validateData = require('../utils/validateData');
const myTodoService = require('../services/myTodos');
const tokenUtils = require('../utils/tokenUtils');

exports.getMyTodos = async (req, res) => {
  try {
    const { user } = await tokenUtils.checkUserToken(req.header('authorization'));
    const todos = await myTodoService.getMyTodos(user);
    successHandler(res, 200, todos, null);
  } catch(e) {
    errorHandler(res, e, 'getMytodos');
  }
};

exports.getMyTodoHistory = async (req, res) => {
  try {
    const { user } = await tokenUtils.checkUserToken(req.header('authorization'));
    const todos = await myTodoService.getMyTodoHistory(user);
    successHandler(res, 200, todos, null);
  } catch(e) {
    errorHandler(res, e, 'getMytodoHistory');
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { user } = await tokenUtils.checkUserToken(req.header('authorization'));
    req.body.user_id = user;
    validateData('addTodo', req.body);
    await myTodoService.inserTodo(req.body);
    const todo = await myTodoService.getRecentTodo(user);
    successHandler(res, 201, todo, null);
  } catch(e) {
    errorHandler(res, e, 'addTodo');
  }
};

exports.finishTodo = async (req, res) => {
  try {
    const { user } = await tokenUtils.checkUserToken(req.header('authorization'));
    req.body.user_id = user;
    validateData('finishTodo', req.body);
    await myTodoService.finishTodo(req.body);
    successHandler(res, 200, { message: 'success' }, null);
  } catch(e) {
    errorHandler(res, e, 'finishTodo');
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { user } = await tokenUtils.checkUserToken(req.header('authorization'));
    req.params.todo_id = Number(req.params.todo_id);
    req.params.user_id = user;
    validateData('deleteTodo', req.params);
    await myTodoService.deleteTodo(req.params);
    successHandler(res, 200, { message: 'success' }, null);
  } catch(e) {
    errorHandler(res, e, 'deleteTodo');
  }
};
