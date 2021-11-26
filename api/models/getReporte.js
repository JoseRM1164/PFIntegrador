const mongoose = require('mongoose');
const {Schema} = mongoose;

let ReportesSchema = new Schema({
    name: String,
    creationDate: Date,
    descripcion: String,
    lang: String,
    uID: String,
  });

let ReporteNuevo = mongoose.model('Reporte', ReportesSchema, 'Reporte')
module.exports = ReporteNuevo;