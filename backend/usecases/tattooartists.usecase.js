const tattooartistsData = require('../data-access/tattooartists.data');

exports.showTattooArtists = async () => {
  const tattooArtists = await tattooartistsData.findAll();
  if (!tattooArtists) {
    return {error: 'No se encontró ningún cliente'};
  } else {
    return {success: tattooArtists};
  }
};

exports.createTattooArtists = async (tattooartistInfo) => {
  const {documento} = tattooartistInfo;
  const tattooArtistExists = await tattooartistsData.findOneResult({documento: documento});
  if (tattooArtistExists) {
    return {error: 'Ya existe el tatuador'};
  }
  const createTattooArtists = await tattooartistsData.insertOne(tattooartistInfo);
  if (!createTattooArtists) {
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
  if (tattooArtistDeleted) {
    return {success: 'Se eliminó exitosamente'};
  } else {
    return {error: 'No se eliminó'};
  }
};
