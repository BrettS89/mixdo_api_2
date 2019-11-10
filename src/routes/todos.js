const router = require('express').Router();
const todosControllers = require('../controllers/todos');

router.get('/get', todosControllers.getTodos);
router.get('/scroll', todosControllers.getTodosScroll);
router.get('/discover', todosControllers.discoverTodos);
router.get('/discoverscroll', todosControllers.discoverTodosScroll);
router.post('/like', todosControllers.likeTodo);

module.exports = router;
