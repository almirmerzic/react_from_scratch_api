
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TodoSchema = new Schema({
  id: {
    type: Number
  },
  todo: {
    type: String,
    required: 'Kindly enter the name of the task'
  }
});

module.exports = mongoose.model('Todo', TodoSchema);