const mongoose = require('../config/mongodbconnection');

const SchemaBooking = new mongoose.Schema({
  fechaCita: {
    type: Date,
    required: [true, 'Se require seleccionar una fecha'],
  },
  idTatuador: {
    type: String,
    required: [true, 'Es requerido un tatuador'],
  },
  idCliente: {
    type: String,
    required: [true, 'Es requerido un cliente'],
  },
  idPiercing: {
    type: String,
  },
  idTatuaje: {
    type: String,
  },
  estado: {
    type: String,
    required: [true, 'Es requerido establecer un estado para la cita'],
  }});

const booking = mongoose.model('booking', SchemaBooking);
module.exports = booking;
