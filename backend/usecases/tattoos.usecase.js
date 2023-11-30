const tattoosData = require('../data-access/tattoos.data');

exports.showTattoos = async () => {
  const tattoos = await tattoosData.findAll();
  if (!tattoos) {
    return {error: 'No se encontró ningún cliente'};
  } else {
    return {success: tattoos};
  }
};

exports.createTattoo = async (tattooInfo) => {
  const {nombre} = tattooInfo;
  const tattooExists = await tattoosData.findOneResult({nombre: nombre});
  if (tattooExists) {
    return {error: 'Ya existe ese tatuaje'};
  }
  const createTattoo = await tattoosData.insertOne(tattooInfo);
  if (!createTattoo) {
    return {error: 'No se creó el tatuaje'};
  } else {
    return {success: 'Se creó el tatuaje exitosamente'};
  }
};

exports.updateTattoo = async (tattooUpdate) => {
  const {id, nombre, descripcion, tamano, color, tecnica, autor, imagen} = tattooUpdate;
  const infoToUpdate = {
    nombre: nombre,
    descripcion: descripcion,
    tamano: tamano,
    color: color,
    tecnica: tecnica,
    autor: autor,
    imagen: imagen,
  };
  const tattooUpdated = await tattoosData.updateOne({_id: id}, infoToUpdate);
  if (!tattooUpdated) {
    return {error: 'No se actualizó'};
  } else {
    return {success: 'Actualizado correctamente'};
  }
};

exports.deleteTattoo = async (id) =>{
  const tattooDeleted = await tattoosData.deleteOne(id);
  if (tattooDeleted) {
    return {success: 'Se eliminó'};
  } else {
    return {error: 'Error al eliminar'};
  }
};
