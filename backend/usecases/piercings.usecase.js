const piercingsData = require('../data-access/piercings.data');

exports.showPiercings = async () => {
  const piercings = await piercingsData.findAll();
  if (!piercings) {
    return {error: 'No se encontró ningún cliente'};
  } else {
    return {success: piercings};
  }
};

exports.createPiercing = async (piercingInfo) => {
  const nombre = piercingInfo.nombre;
  const piercingExists = await piercingsData.findOneResult({nombre: nombre});
  if (piercingExists) {
    return {error: 'ya existe el piercing'};
  }
  const createPiercing = piercingsData.insertOne(piercingInfo);
  if (!createPiercing) {
    return {error: 'No se creó el piercing'};
  } else {
    return {success: 'Se creó'};
  }
};

exports.updatePiercing = async (piercingUpdate) => {
  const {id, nombre, zona, imagen} = piercingUpdate;
  const infoToUpdate = {
    nombre: nombre,
    zona: zona,
    imagen: imagen,
  };
  const piercingUpdated = await piercingsData.updateOne({_id: id}, infoToUpdate);
  if (piercingUpdated) {
    return {error: 'No se actualizó'};
  } else {
    return {success: 'Actualizado correctamente'};
  }
};

exports.deletePiercing = async (id) => {
  const piercingDeleted = await piercingsData.deleteOne(id);
  if (piercingDeleted) {
    return {success: 'Se eliminó'};
  } else {
    return {error: 'No se elimino'};
  }
};
