const booking = require('../../models/booking.model');
const bookingModel = require('../../models/booking.model');

exports.findAll = async (filter, projection) => {
    if (filter && projection) {
        return await bookingModel.find(filter, projection);
    } else if (!projection) {
        return await bookingModel.find(filter);
    } else if (!filter && !projection) {
        return await bookingModel.find();
    } else if (!filter) {
        return await bookingModel.find({}, projection);
    }
};

exports.findOneResult = async (filter) => {
    return await findOne(filter);
  };

exports.insertOne = async (info) => {
    return await bookingModel.create(info);
};

exports.updateOne = async(filter, dataUpdated) => {
    return await bookingModel.findOneAndUpdate(filter, dataUpdated);
};

exports.deleteOne = async(filter) =>{
    return await bookingModel.findOneAndDelete(filter);
};