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
  const tattooartists = new tattooArtistsModel(info);
  return await tattooartists.save();
};

exports.updateOne = async (filter, dataUpdated) =>{
  return await tattooArtistsModel.findOneAndUpdate(filter, dataUpdated);
};

exports.deleteOne = async (filter) =>{
  return await tattooArtistsModel.findOneAndDelete({_id: filter});
};
