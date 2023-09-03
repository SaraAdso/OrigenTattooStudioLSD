const ClientsModel = require('..')
exports.finder = async(filter) => {

    return await find(filter)
}

exports.findOne = async(filter) => {
    return await findOne(filter)
}

exports.insertOne = async() =>{
    
}