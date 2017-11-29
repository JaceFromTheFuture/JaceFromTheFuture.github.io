var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlogSchema = Schema({
  title: {type: String, required: true},
  message: {type: String, required: true},
  link: {type: String},
  date: {type: String, required: true}
});

BlogSchema.virtual('url').get(function () {
  return '/dashboard/'+this._id;
});

module.exports = mongoose.model('Blog', BlogSchema);
