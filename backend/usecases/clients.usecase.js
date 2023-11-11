const clientsData = require('../data-access/clients.data');
const usersData = require('../data-access/users.data');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken'); 
const jwtSecret = 'private'
exports.showClients = async () => {
  const clients = await clientsData.findAll();
  if (!clients) {
    return {error: 'No se encontró ningún cliente'};
  } else {
    return {success: clients};
  }
}

exports.createClient = async (clientInfo) => {
  const {nombre, apellido, celular, documento, correo, fechaNacimiento, alergias, contrasena} = clientInfo; // fragmentar la variable en partes. Cada uno son los names de los input del formulario
  const passwordencrypted = await bcrypt.hash(contrasena, 10);
  clientInfo.contrasena = passwordencrypted;
  const clientExists = await clientsData.findOneResult({documento: documento});
  if (clientExists) {
    return {error: 'Ya existe el cliente'};
  }
  const createClient = await clientsData.insertOne(clientInfo); // En el controlador se dice que es el req.body
  const createUser = await usersData.insertOne({correo: correo, contrasena: passwordencrypted, rol: 'Cliente'})
  if (!createClient && !createUser) {
    return {error: 'No se creó'};
  } else {
    return {success: 'Se creó'};
  }
}

exports.loginClient = async (clientInfo) => {
  const {correo, contrasena} = clientInfo;
  const userInfo = await usersData.findOneResult({correo: correo}) 
  if(!userInfo){
    return {error: 'No existe el usuario'}
  }
  const isPasswordCorrect = await bcrypt.compare(contrasena, userInfo.contrasena);
  const token = await jwt.sign({ id: userInfo._id}, jwtSecret, {expiresIn: 18000000});
  if (isPasswordCorrect) {
    if (userInfo.rol === 'Cliente') {
      // REDIRECT
    } else if (usuario.rol === 'Administrador') {
      // REDIRECT
    } else {
      return {error: 'NO SE RECONOCE EL ROL'}
    }
  } else {
    return {error: 'USUARIO Y/O CONTRASEÑA INCORRECTA'}
  }
}

exports.updateClient = async (infoUpdate) => {
  const {nombre, apellido, celular, documento, correo, alergias, contrasena, fechaNacimiento} = infoUpdate;
  const infoToUpdate = {
    nombre: nombre,
    apellido: apellido,
    celular: celular,
    correo: correo,
    alergias: alergias,
    contrasena: contrasena,
    fechaNacimiento: fechaNacimiento,
    documento: documento,
  };
  // const clientExists = await clientsData.findOneResult({docu})
  const clientUpdated = await clientsData.updateOne({documento: documento}, infoToUpdate);
  if (clientUpdated) {
    return {success: 'Se actualizó'};
  } else {
    return {error: 'No se actualizó'};
  }
}

exports.deleteClient = async (id) => {
  const clientDeleted = await clientsData.deleteOne(id);
  if (clientDeleted) {
    return {success: 'Se eliminó'};
  } else {
    return {error: 'No se eliminó'};
  }
}
