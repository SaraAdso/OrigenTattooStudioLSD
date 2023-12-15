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
    default: 'https://images-ext-2.discordapp.net/external/TvbVQey0cfblYAhQdF4nXk7DvliJgZFKZZiWZstLlhI/%3Fw%3D996%26t%3Dst%3D1702607649~exp%3D1702608249~hmac%3D1b2a8bf071d5243f17df7b0be4ded69ed052f13565aeb489dabd47ec9b2201ae/https/img.freepik.com/vector-gratis/senal-roja-prohibida-icono-advertencia-o-simbolo-parada-peligro-seguridad-aislado-ilustracion-vectorial_56104-912.jpg?format=webp&width=550&height=440',
  }});

const booking = mongoose.model('booking', SchemaBooking);
module.exports = booking;
