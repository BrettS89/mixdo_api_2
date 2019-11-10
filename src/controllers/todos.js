const { errorHandler } = require('../handlers/errorHandlers');
const successHandler = require('../handlers/successHandler');
const validateData = require('../utils/validateData');
const todoService = require('../services/todos');
const tokenUtils = require('../utils/tokenUtils');

exports.getTodos = async (req, res) => {
  try {
    const { user } = await tokenUtils.checkUserToken(req.header('authorization'));
    const todos = await todoService.getTodos(user);
    successHandler(res, 200, todos, null);
  } catch(e) {
    errorHandler(res, e, 'getTodos');
  }
};

exports.getTodosScroll = async (req, res) => {
  try {
    const { user } = await tokenUtils.checkUserToken(req.header('authorization'));
    const todos = await todoService.getTodosScroll(user, req.query.date);
    successHandler(res, 200, todos, null);
  } catch(e) {
    errorHandler(res, e, 'getTodosScroll');
  }
};

exports.discoverTodos = async (req, res) => {
  try {
    const { user } = await tokenUtils.checkUserToken(req.header('authorization'));
    const todos = await todoService.discoverTodos(user);
    successHandler(res, 200, todos, null);
  } catch(e) {
    errorHandler(res, e, 'discoverTodos');
  }
};

exports.discoverTodosScroll = async (req, res) => {
  try {
    const { user } = await tokenUtils.checkUserToken(req.header('authorization'));
    const todos = await todoService.discoverTodosScroll(user, req.query.date);
    successHandler(res, 200, todos, null);
  } catch(e) {
    errorHandler(res, e, 'discoverTodos');
  }
};

exports.likeTodo = async (req, res) => {
  try {
    const { user } = await tokenUtils.checkUserToken(req.header('authorization'));
    req.body.user_id = user;
    validateData('likeTodo', req.body);
    await todoService.likeTodo(req.body.id);
    successHandler(res, 201, { message: 'success' }, null);
  } catch(e) {
    errorHandler(res, e, 'likeTodo');
  }
};
