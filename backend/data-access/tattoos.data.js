const tattoosModel = require('../models/tattoos.model');

exports.findAll = async (filter, projection)=>{
  if (filter && projection) {
    return await tattoosModel.find(filter, projection);
  } else if (!projection) {
    return await tattoosModel.find(filter);
  } else if (!filter && !projection) {
    return await tattoosModel.find();
  } else if (!filter) {
    return await tattoosModel.find({}, projection);
  }
};

exports.findOneResult = async (filter) => {
  return await tattoosModel.findOne(filter);
};

exports.insertOne = async (info) => {
  const tattoo = new tattoosModel(info);
  tattoo._id = null;
  return await tattoo.save();
};

exports.updateOne = async (filter, dataUpdated) => {
  return await tattoosModel.findOneAndReplace(filter, dataUpdated);
};

exports.deleteOne = async (filter) => {
  return await tattoosModel.findOneAndDelete(filter);
};

exports.showTattoos = async (req, res) => {
  const listadoTattoos = await tattoo.find();
  res.render('tattoo', {
    tattoos: listadoTattoos,
  });
};