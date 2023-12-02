const usersData = require('../data-access/users.data');
const bookingsData = require('../data-access/booking.data');
const bcrypt = require('bcrypt');

exports.showUsers = async () =>{
  const users = await usersData.findAll();
  if (!users) {
    return {error: 'No se encontró ningún usuario'};
  } else {
    return {success: users};
  }
};

exports.createUser = async (userInfo) => {
  const {correo} = userInfo;
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

exports.loginUser = async (clientInfo) => {
  const {correo, contrasena} = clientInfo;
  const userInfo = await usersData.findOneResult({correo: correo});
  if (!userInfo) {
    return {error: 'No existe el usuario'};
  }
  const isPasswordCorrect = await bcrypt.compare(contrasena, userInfo.contrasena);

  if (isPasswordCorrect) {
    if (userInfo.rol === 'Cliente') {
      return {path: '/', rol: 'Cliente', email: userInfo.correo};
    } else if (userInfo.rol === 'Administrador') {
      return {path: '/admin', rol: 'Administrador', email: userInfo.correo};
    }
  } else {
    return {error: 'USUARIO Y/O CONTRASEÑA INCORRECTA'};
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
    return {success: 'Si dió!!'};
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
