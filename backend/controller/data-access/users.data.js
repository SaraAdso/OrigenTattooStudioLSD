const usersModel = require('../../models/users.model');

exports.findAll = async(filter, projection)=>{
    if (filter && projection) {
        return await usersModel.find(filter, projection);
    } else if (!projection){
        return await usersModel.find(filter);
    } else if (!filter && !projection) {
        return await usersModel.find();
    } else if (!filter) {
        return await usersModel.find({}, projection);
    }
};

exports.findOneResult = async (filter) => {
    return await findOne(filter);
  };

exports.insertOne = async(info) =>{
    return await usersModel.create(info);
};

exports.updateOne = async(filter, dataUpdated) =>{
    return await usersModel.findOneAndUpdate(filter, dataUpdated);
};

exports.deleteOne = async(filter) =>{
    return await usersModel.findOneAndDelete(filter)
}