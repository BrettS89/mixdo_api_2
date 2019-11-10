const router = require('express').Router();
const myTodosController = require('../controllers/myTodos');

router.get('/get', myTodosController.getMyTodos);
router.get('/history', myTodosController.getMyTodoHistory);
router.post('/add', myTodosController.addTodo);
router.put('/finish', myTodosController.finishTodo);
router.delete('/delete/:todo_id', myTodosController.deleteTodo);

module.exports = router;
