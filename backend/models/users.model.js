const mongoose = require('../config/mongodbconnection');

const SchemaUser = new mongoose.Schema({
  correo: {
    type: String,
    required: [true, 'Se requiere el correo'],
  },
  contrasena: {
    type: String,
    required: [true, 'Se requiere la contraseña'],
  },
  rol: {
    type: String,
    required: [true, 'Se requiere un rol asigando'],
  }});

const user = mongoose.model('user', SchemaUser);
module.exports = user;
