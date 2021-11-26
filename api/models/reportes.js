const mongoose = require('mongoose');
const {Schema} = mongoose;

let ReportesSchema = new Schema({
  name: String,
  creationDate: Date,
  descripcion: String,
  lang: String,
  uID: String,
});


let reportes = mongoose.model('Reporte', ReportesSchema, 'Reporte')
module.exports = reportes;