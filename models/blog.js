var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlogSchema = Schema({
  title: {type: String, required: true},
  message: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

BlogSchema.virtual('url').get(function () {
  return '/blogs/'+this._id;
});

module.exports = mongoose.model('Blog', BlogSchema);
