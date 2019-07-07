'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/todo')
    .get(todoList.list_all_todos)
    .post(todoList.create_a_todos);


  app.route('/todo/:taskId')
    .delete(todoList.delete_a_todos);
};