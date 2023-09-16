const piercingsModel = require('../../models/piercings.model');

exports.findAll = async(filter, projection)=>{
    if (filter && projection) {
        return await piercingsModel.find(filter, projection);
    } else if (!projection){
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

exports.insertOne = async(info) =>{
    return await piercingsModel.create(info);
};

exports.updateOne = async(filter, dataUpdated) =>{
    return await piercingsModel.findOneAndUpdate(filter, dataUpdated);
};

exports.deleteOne = async(filter) =>{
    return await piercingsModel.findOneAndDelete(filter)
}