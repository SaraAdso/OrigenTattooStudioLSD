const tattooartistsData = require('../data-access/tattooartists.data');
const userData = require('../data-access/users.data');
const bcrypt = require('bcrypt');

exports.showTattooArtists = async () => {
  const tattooArtists = await tattooartistsData.findAll();
  if (!tattooArtists) {
    return {error: 'No se encontró ningún cliente'};
  } else {
    return {success: tattooArtists};
  }
};

exports.createTattooArtists = async (tattooartistInfo) => {
  const {documento, correo, contrasena} = tattooartistInfo;
  const passwordencrypted = await bcrypt.hash(contrasena, 10);
  tattooartistInfo.contrasena = passwordencrypted;
  const tattooArtistExists = await tattooartistsData.findOneResult({documento: documento});
  if (tattooArtistExists) {
    return {error: 'Ya existe el tatuador'};
  }
  const createTattooArtists = await tattooartistsData.insertOne(tattooartistInfo);
  const createUser = await userData.insertOne({correo: correo, contrasena: passwordencrypted, rol: 'Administrador'})
  if (!createTattooArtists && !createUser) {
    return {error: 'No se creó'};
  } else {
    return {success: 'Se creó'};
  }
};

exports.updateTattooArtist = async (infoUpdate) => {
  const {nombre, apellido, celular, documento, correo, contrasena} = infoUpdate;
  const infoToUpdate = {
    nombre: nombre,
    apellido: apellido,
    celular: celular,
    documento: documento,
    correo: correo,
    contrasena: contrasena,
  };
  const tattooArtistUpdated = await tattooartistsData.updateOne({documento: documento}, infoToUpdate);
  if (!tattooArtistUpdated) {
    return {error: 'No se actualizó'};
  } else {
    return {success: 'Actualizado'};
  }
};

exports.deleteTattooArtist = async (id) =>{
  const tattooArtistDeleted = await tattooartistsData.deleteOne(id);
  const userDeleted = await userData.deleteOne(tattooArtistDeleted.correo);
  if (tattooArtistDeleted && userDeleted) {
    return {tattooArtistDeleted};
  } else {
    return {error: 'No se eliminó'};
  }
};
