const mongoose = require('mongoose');
const {Schema} = mongoose;

let inventoriesSchema = new Schema({
  name: String,
  creationDate: Date,
  descripcion: String,
  lang: String,
  uID: String,
});

let inventories = mongoose.model('Inventarios', inventoriesSchema, 'Inventarios')
module.exports = inventories;