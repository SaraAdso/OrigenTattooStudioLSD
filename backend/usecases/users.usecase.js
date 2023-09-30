const usersData = require('../data-access/users.data');

exports.showUsers = async () =>{
  const users = await usersData.findAll();
  if (!users) {
    return {error: 'No se encontró ningún usuario'};
  } else {
    return {success: users};
  }
};

exports.createUser = async (userInfo) => {
  const {correo, contrasena, rol} = userInfo;
  const userExists = await usersData.findOneResult({correo: correo});
  if (userExists) {
    return {error: 'Ya existe ese usuario'};
  }
  const createUser = await usersData.insertOne(userInfo);
  if (!createUser) {
    return {error: 'No se creó'};
  } else {
    return {success: 'Se creó'};
  }
};

exports.updateUser = async (infoUpdate) => {
  const {correo, contrasena, rol} = infoUpdate;
  const infoToUpdate = {
    correo: correo,
    contrasena: contrasena,
    rol: rol,
  };
  const userUpdated = await usersData.updateOne({correo: correo}, infoToUpdate);
  if (userUpdated) {
    return {success: 'Se actualizó el usuario'};
  } else {
    return {error: 'No se actualizó'};
  }
};

exports.deleteUser = async (id) =>{
  const userDeleted = await usersData.deleteOne(id);
  if (userDeleted) {
    return {success: 'Se eliminó'};
  } else {
    return {error: 'No se eliminó'};
  }
};
