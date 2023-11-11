const usersModel = require('../models/users.model');

exports.findAll = async (filter, projection)=>{
  if (filter && projection) {
    return await usersModel.find(filter, projection);
  } else if (!projection) {
    return await usersModel.find(filter);
  } else if (!filter && !projection) {
    return await usersModel.find();
  } else if (!filter) {
    return await usersModel.find({}, projection);
  }
};

exports.findOneResult = async (filter) => {
  return await usersModel.findOne(filter);
};

exports.insertOne = async (info) =>{
  const user = new usersModel(info);
  return await user.save();
};

exports.updateOne = async (filter, dataUpdated) =>{
  return await usersModel.findOneAndReplace(filter, dataUpdated);
};

exports.deleteOne = async (filter) =>{
  return await usersModel.findOneAndDelete(filter);
};
