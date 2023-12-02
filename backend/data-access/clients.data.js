const clientsModel = require('../models/clients.model');
const bookingsModel = require('../models/booking.model');

exports.findAll = async (filter, projection) => {
  if (filter && projection) {
    return await clientsModel.find(filter, projection);
  } else if (!projection) {
    return await clientsModel.find(filter);
  } else if (!filter && !projection) {
    return await clientsModel.find();
  } else if (!filter) {
    return await clientsModel.find({}, projection);
  }
};

exports.findOneResult = async (filter) => {
  return await clientsModel.findOne(filter);
};

exports.insertOne = async (info) =>{
  const client = new clientsModel(info);
  return await client.save();
};

exports.updateOne = async (filter, dataUpdated) =>{
  return await clientsModel.findOneAndReplace(filter, dataUpdated);
};

exports.deleteOne = async (filter) =>{
  return await clientsModel.findOneAndDelete(filter);
};
