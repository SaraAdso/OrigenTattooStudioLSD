const clientsData = require('../data-access/clients.data');

exports.showClients = async() => {
  return clientsData.findAll();
};

exports.createClient = async(clientInfo) => {
  const {nombre, apellido, celular, documento, correo, fechaNacimiento, alergias, contrasena} = clientInfo; // fragmentar la variable en partes. Cada uno son los names de los input del formulario 
  const createClient = await clientsData.insertOne(clientInfo); // En el controlador se dice que es el req.body
  const clientCreated = await clientsData.findOneResult(documento);
  if(!createClient) {
    return {error: 'No se creo'}
  } else if (clientCreated) {
    return {error: 'Ya existe el cliente'}
  } else {
    return {success: 'Se creo'}
  }
};

exports.updateClient = async(infoUpdate) => {
  const {nombre, apellido, celular, documento, correo, alergias, contrasena} = infoUpdate;
  const infoToUpdate = {
    nombre: nombre,
    apellido: apellido,
    celular: celular,
    correo: correo,
    alergias: alergias,
    contrasena: contrasena
  }
  const clientUpdated = await clientsData.updateOne({documento: documento}, infoToUpdate);
  if(!clientUpdated){
    return {error: 'No se actualizó'}
  }else {
    return {success: 'Si dió!!'}
  }
}

exports.deleteClient = async(id) => {
    const clientDeleted = await clientsData.deleteOne(id);
    if (clientDeleted){
        return {success: 'Se eliminó'}
    } else {
        return{error:'No se eliminó'}
    }
}