const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const obj = new Schema({
  name: {type: String},
  age: {type: String},
  slug: {type: String, slug: 'name', unique: true}
});

module.exports = mongoose.model('', obj, 'obj');
