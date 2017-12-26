var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/calls'); 
module.exports = connection;