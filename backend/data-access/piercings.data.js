const piercingsModel = require('../models/piercings.model');

exports.findAll = async (filter, projection)=>{
  if (filter && projection) {
    return await piercingsModel.find(filter, projection);
  } else if (!projection) {
    return await piercingsModel.find(filter);
  } else if (!filter && !projection) {
    return await piercingsModel.find();
  } else if (!filter) {
    return await piercingsModel.find({}, projection);
  }
};

exports.findOneResult = async (filter) => {
  return await piercingsModel.findOne(filter);
};

exports.insertOne = async (info) =>{
  const piercing = new piercingsModel(info);
  return await piercing.save();
};

exports.updateOne = async (filter, dataUpdated) =>{
  return await piercingsModel.findOneAndReplace(filter, dataUpdated);
};

exports.deleteOne = async (filter) =>{
  return await piercingsModel.findOneAndDelete(filter);
};
