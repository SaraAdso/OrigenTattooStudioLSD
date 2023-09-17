const piercingsData = require('../data-access/piercings.data');

exports.showPiercings = async() => {
    return piercingsData.findAll();
}

exports.createPiercing = async(piercingInfo) => {
    const {nombre, zona} = piercingInfo;
    const piercingExists = await piercingsData.findOneResult({nombre: nombre});
    if (piercingExists) {
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
    const piercingUpdated = await piercingsData.updateOne({nombre}, infoToUpdate)
    if (piercingUpdated) {
        return {error: ''}
    } else {
        return {error: 'No se actualizó'}
    }
};

exports.deletePiercing = async(id) => {
    const piercingDeleted = await piercingsData.deleteOne(id);
    if(piercingDeleted){
        return {success: 'Se eliminó'}
    } else {
        return {error:'No se elimino'};
    }
};