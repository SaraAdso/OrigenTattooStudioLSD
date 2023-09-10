// const ClientsData = require('../data-access/clients.data');

// exports.showClients = async() =>{
//   return ClientsData.findAll();
// }
// exports.createClient = async(clientInfo) => {
//   const {nombre, apellido, edad, gustos} = clientInfo; // fragmentar la variable en partes. Cada uno son los names de los input del formulario 
//   const clientCreated = await ClientsData.insertOne(clientInfo); // En el controlador se dice que es el req.body
//   if(!clientCreated) {
//     return {error: 'No se creo'}
//   } else {
//     return {felicitaciones: 'Se creo'}
//   }
// }

// exports.updateClient = async(infoUpdate) =>{
//   const {id, nombre, apellido, edad} = infoUpdate;
//   const infoToUpdate = {
//     nombfre,
//     apellido,
//     edad
//   }
//   const clientUpdated = await ClientsData.updateOne({_id: id}, infoToUpdate);
//   if(!clientUpdated){
//     return {error: 'No se actualizó'}
//   }else {
//     return {success: 'Si dió!!'}
//   }
// }
