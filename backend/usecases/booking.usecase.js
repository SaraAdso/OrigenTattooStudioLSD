const booking = require('../models/booking.model');
const bookingData = require('../data-access/booking.data');

exports.showBooking = async() => {
    return bookingData.findAll();
}

exports.createDate = async(dateInfo) => {
    const {fechaCita, estado, idTatuador} = dateInfo;

    const dateCreated = await bookingData.findOneResult({fechaCita: fechaCita});
    if (dateCreated) {
        return {error: 'Ya existe una cita para esa fecha y hora'}
    }
    const createDate = await bookingData.insertOne(dateInfo);
    if(!createDate) {
        return {error: 'No se creó la cita'}
    } else {
        return {success: 'Se agendó la cita exitosamente'}
    }
};

exports.updateDate = async(dateUpdate) => {
    const {id, fechaCita, estado, idTatuador} = dateUpdate;
    const dateToUpdate = {
        fechaCita: fechaCita,
        estado: estado,
        idTatuador: idTatuador
    }
    const dateExists = await bookingData.findOneResult(fechaCita);
    const dateUpdated = await bookingData.updateOne({_id: id}, dateToUpdate);
    if (!dateUpdated){ //Verificar tambien si el tatuador a elegir está ocupado
        return{error: 'No se actualizó'}
    } else if (dateExists) {
        return {error: `La fecha ${fechaCita} ya está ocupada`}
    } else {
        return {success:'Se actualizo correctamente'};
    }
};

exports.deleteDate = async(id) => {
    const dateDeleted = await bookingData.deleteOne(id);
    if(dateDeleted) {
        return {success: 'Se eliminó la cita'}
    } else {
        return{ error: 'No se eliminó'}
    }
};