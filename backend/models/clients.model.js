const mongoose = require('../config/mongodbconnection');
const SchemaClient = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Se requiere ingresar un nombre'],
  },
  apellido: {
    type: String,
    required: [true, 'Se require ingresar un apellido'],
  },
  celular: {
    type: String,
    required: [true, 'Se require ingresar un número de celualr'],
    minLength: [10, 'El celular debe tener 10 dígitos'],
    maxLength: [10, 'El celular debe tener 10 dígitos'],
  },
  documento: {
    type: String,
    required: [true, 'Se require un número de documento'],
    minLength: [8, 'El documento debe tener 8 dígitos como mínimo'],
    maxLength: [10, 'El documento debe tener menos de 10 dígitos para ser válido'],
    unique: true
  },
  correo: {
    type: String,
    required: [true, 'Se require ingresar un correo electrónico'],
    unique: true,
  },
  fechaNacimiento: {
    type: String,
    required: [true, 'Se require una fecha de nacimiento'],
  },
  alergias: {
    type: String,
  },
  idTatuaje: {
    type: String,
  },
  idPiercing: {
    type: String,
  },
  contrasena: {
    type: String,
    required: [true, 'Se require ingresar una contraseña'],
    minLength: [8, 'La contraseña debe tener mínimo 8 caracteres'],
  },
  fotoDocumento: {
    type: String,
    required: [true, 'Se requiere adjuntar una foto del documento de identidad'],
    default: 'https://images-ext-2.discordapp.net/external/TvbVQey0cfblYAhQdF4nXk7DvliJgZFKZZiWZstLlhI/%3Fw%3D996%26t%3Dst%3D1702607649~exp%3D1702608249~hmac%3D1b2a8bf071d5243f17df7b0be4ded69ed052f13565aeb489dabd47ec9b2201ae/https/img.freepik.com/vector-gratis/senal-roja-prohibida-icono-advertencia-o-simbolo-parada-peligro-seguridad-aislado-ilustracion-vectorial_56104-912.jpg?format=webp&width=550&height=440',
  }});

const client = mongoose.model('Client', SchemaClient);
module.exports = client;
