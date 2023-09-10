const piercingsData = require('../data-access/piercings.data');

exports.showPiercings = async() => {
    return piercingsData.findAll();
}

exports.createPiercing = async(piercingInfo) => {
    const {nombre, zona} = piercingInfo;
    const createPiercing = await piercingsData.insertOne(piercingInfo);
    const piercingCreated = await piercingsData.findOneResult(nombre);
    if(!createPiercing) {
        return {error: 'No se creó'}
    } else if (piercingCreated) {
        return {error: 'ya existe el piercing'}
    } else {
        return {success: 'Se creó'}
    }
};

exports.updatePiercing = async(infoUpdate) => {
    const {nombre, zona} = infoUpdate;
    const infoToUpdate = {
        nombre : nombre
    }
}