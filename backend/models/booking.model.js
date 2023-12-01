const mongoose = require('../config/mongodbconnection');

const SchemaBooking = new mongoose.Schema({
  fechaCita: {
    type: Date,
    required: [true, 'Se require seleccionar una fecha'],
    unique: [true, 'Ya existe una cita para esa hora'],
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
  fotoConsentimiento: {
    type: String,
  }});

const booking = mongoose.model('booking', SchemaBooking);
module.exports = booking;
