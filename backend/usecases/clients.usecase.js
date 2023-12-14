const clientsData = require('../data-access/clients.data');
const bookingsData = require('../data-access/booking.data')
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

exports.showClient = async (email) => {
  const client = await clientsData.findOneResult({correo: email});
  const bookings = await bookingsData.findAll({idCliente: email});
  return {client: client, bookings: bookings};
};

exports.createClient = async (clientInfo) => {
  const {documento, correo, contrasena} = clientInfo; // fragmentar la variable en partes. Cada uno son los names de los input del formulario
  const passwordencrypted = await bcrypt.hash(contrasena, 10);
  clientInfo.contrasena = passwordencrypted;
  const documentClientExists = await clientsData.findOneResult({documento: documento});
  const emailClientExists = await clientsData.findOneResult({correo: correo});
  if (documentClientExists && emailClientExists) {
    return {error: 'Ya existe un cliente con esas credenciales'};
  } else if (documentClientExists) {
    return {error: 'Ya existe un cliente con ese documento'};
  } else if (emailClientExists) {
    return {error: 'Ya existe un cliente con ese correo'};
  }
  const createClient = await clientsData.insertOne(clientInfo); // En el controlador se dice que es el req.body
  const createUser = await usersData.insertOne({correo: correo, contrasena: passwordencrypted, rol: 'Cliente'});
  if (!createClient && !createUser) {
    return {error: 'No se pudo crear el cliente'};
  } else {
    return {success: 'Se creó el cliente exitosamente', rol: createUser.rol, email: createUser.correo};
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
  const userDeleted = await usersData.deleteOne({correo: clientDeleted.correo})
  if (clientDeleted) {
    return {success: 'Se eliminó'};
  } else {
    return {error: 'No se eliminó'};
  }
};

