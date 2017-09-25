var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlogSchema = Schema({
  title:  {type: String, required: true},
  body:   String,
  date: { type: Date, default: Date.now }
});

//Export model
module.exports = mongoose.model('Blog', BlogSchema);
