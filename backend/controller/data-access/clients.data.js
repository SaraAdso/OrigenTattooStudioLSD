// const ClientsModel = require('../../models/clients.model');

// exports.findAll = async (filter, projection) => {
//   if (filter && projection) {
//     return await ClientsModel.find(filter, projection);
//   } else if (!projection) {
//     return await ClientsModel.find(filter);
//   } else if (!filter && !projection) {
//     return await ClientsModel.find();
//   } else if (!filter) {
//     return await ClientsModel.find({}, projection);
//   }
// };

// // exports.findOneResult = async (filter) => {
// //   return await findOne(filter);
// // };

// exports.insertOne = async (info) =>{
//   return await ClientsModel.create(info);
// };

// exports.updateOne = async (filter, dataUpdated) =>{
//   return await ClientsModel.findOneAndUpdate(filter, dataUpdated);
// }
