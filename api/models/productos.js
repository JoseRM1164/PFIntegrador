const mongoose = require('mongoose');
const {Schema} = mongoose;

let productoSchema = new Schema({
  name: String,
  cantindad: Number,
	caducidad: String,
	precio: Number,
  invenID: String,
});

let producto = mongoose.model('Productos', productoSchema, 'Productos')
module.exports = producto;