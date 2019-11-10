const express = require('express');
const MySql = require('./src/db/mysql');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth');
const todoRoutes = require('./src/routes/todos');
const myTodoRoutes = require('./src/routes/myTodos');
const userRoutes = require('./src/routes/users');

const app = express();
const mysql = new MySql();

mysql.connection().connect(() => {
  console.log('connected to mysql');
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', userRoutes);
app.use('/todos', todoRoutes);
app.use('/mytodos', myTodoRoutes);
app.use('/auth', authRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('server started on port ' + port);
});
