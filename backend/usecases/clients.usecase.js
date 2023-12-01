const clientsData = require('../data-access/clients.data');
const usersData = require('../data-access/users.data');
const bcrypt = require('bcrypt');

exports.showClients = async () => {
  const clients = await clientsData.findAll();
  if (!clients) {
    return {error: 'No se encontró ningún cliente'};
  } else {
    return {success: clients};
  }
};

exports.createClient = async (clientInfo) => {
  const {documento, correo, contrasena} = clientInfo; // fragmentar la variable en partes. Cada uno son los names de los input del formulario
  const passwordencrypted = await bcrypt.hash(contrasena, 10);
  clientInfo.contrasena = passwordencrypted;
  const clientExists = await clientsData.findOneResult({documento: documento});
  if (clientExists) {
    return {error: 'Ya existe el cliente'};
  }
  const createClient = await clientsData.insertOne(clientInfo); // En el controlador se dice que es el req.body
  const createUser = await usersData.insertOne({correo: correo, contrasena: passwordencrypted, rol: 'Cliente'});
  if (!createClient && !createUser) {
    return {error: 'No se creó'};
  } else {
    return {success: 'Se creó'};
  }
};

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
};

exports.deleteClient = async (id) => {
  const clientDeleted = await clientsData.deleteOne({_id: id});
  if (clientDeleted) {
    return {success: 'Se eliminó'};
  } else {
    return {error: 'No se eliminó'};
  }
};

