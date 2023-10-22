const tattooArtistsModel = require('../models/tattooartists.model');

exports.findAll = async (filter, projection)=>{
  if (filter && projection) {
    return await tattooArtistsModel.find(filter, projection);
  } else if (!projection) {
    return await tattooArtistsModel.find(filter);
  } else if (!filter && !projection) {
    return await tattooArtistsModel.find();
  } else if (!filter) {
    return await tattooArtistsModel.find({}, projection);
  }
};

exports.findOneResult = async (filter) => {
  return await tattooArtistsModel.findOne(filter);
};

exports.insertOne = async (info) =>{
  return await tattooArtistsModel.create(info);
};

exports.updateOne = async (filter, dataUpdated) =>{
  return await tattooArtistsModel.findOneAndReplace(filter, dataUpdated);
};

exports.deleteOne = async (filter) =>{
  return await tattooArtistsModel.findOneAndDelete(filter);
};
