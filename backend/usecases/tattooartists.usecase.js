const tattooartistsdata = require('../data-access/tattooartists.data');

exports.showTattooArtists = async () => {
  return tattooartistsdata.findAll();
};

exports.createTattooArtists = async (tattooartistInfo) => {
  const {nombre, apellido, celular, documento, correo, contrasena} = tattooartistInfo;
  const tattooArtistExists = await tattooartistsdata.findOneResult({documento: documento});
  if (tattooArtistExists) {
    return {error: 'Ya existe el tatuador'};
  }
  const createTattooArtists = await tattooartistsdata.insertOne(tattooartistInfo);
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
  const tattooArtistUpdated = await tattooartistsdata.updateOne({documento: documento});
  if (!clientUpdated) {
    return {error: 'No se actualizó'};
  } else {
    return {success: 'Actualizado'};
  }
};

exports.deleteTattooArtist = async (id) =>{
  const tattooArtistDeleted = await tattooartistsdata.deleteOne(id);
  if (clientDeleted) {
    return {success: 'Se eliminó exitosamente'};
  } else {
    return {error: 'No se eliminó'};
  }
};
