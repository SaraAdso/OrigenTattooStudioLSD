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
  },
  correo: {
    type: String,
    required: [true, 'Se require ingresar un correo electrónic'],
  },
  fechaNacimiento: {
    type: Date,
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
  }});

const client = mongoose.model('Client', SchemaClient);
module.exports = client;
