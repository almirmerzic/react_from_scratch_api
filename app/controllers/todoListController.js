'use strict';


var mongoose = require('mongoose'),
  Todo = mongoose.model('Todo');

exports.list_all_todos = function(req, res) {
    Todo.find({}, function(err, todos) {
    if (err)
      res.send(err);
    res.json(todos);
  });
};

exports.create_a_todo = function(req, res) {
    var new_todo = new Todo(req.body);
    new_todo.save(function(err, todo) {
      if (err)
        res.send(err);
      res.json(todo);
    });
  };
  
  exports.delete_a_todo = function(req, res) {
    Todo.remove({
      id: req.params.id
    }, function(err, todo) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };
  