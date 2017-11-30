var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlogSchema = Schema({
  title: {type: String, required: true},
  message: {type: String, required: true},
  link: {type: String, required: true, default: ''},
  date: {type: String, required: true},
  hits: {type: Number, required: true, default: 0}
});

BlogSchema.virtual('url').get(function () {
  return '/dashboard/'+this._id;
});

module.exports = mongoose.model('Blog', BlogSchema);
