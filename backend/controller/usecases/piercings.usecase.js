const piercingsData = require('../data-access/piercings.data');

exports.showPiercings = async() => {
    return piercingsData.findAll();
}

exports.createPiercing = async(piercingInfo) => {
    const {nombre, zona} = piercingInfo;
    const piercingCreated = await piercingsData.findOneResult({nombre: nombre});
    if (piercingCreated) {
        return {error: 'ya existe el piercing'}
    }
    const createPiercing = await piercingsData.insertOne(piercingInfo);
    if(!createPiercing) {
        return {error: 'No se creó'}
    } else {
        return {success: 'Se creó'}
    }
};

exports.updatePiercing = async(infoUpdate) => {
    const {nombre, zona} = infoUpdate;
    const infoToUpdate = {
        nombre : nombre,
        zona : zona
    }
    const piercingExists = await piercingsData.findOneResult(nombre)
    const piercingUpdated = await piercingsData.updateOne({nombre}, infoToUpdate)
    if (piercingUpdated) {
        return {error: ''}
    }
}