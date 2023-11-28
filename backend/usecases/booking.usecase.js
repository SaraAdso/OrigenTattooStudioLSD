const bookingData = require('../data-access/booking.data');

exports.showBooking = async () => {
  const booking = await bookingData.findAll();
  if (!booking) {
    return {error: 'No se encontró ningún cliente'};
  } else {
    return {success: booking};
  }
};

exports.createBooking = async (bookingInfo) => {
  const fechaCita = bookingInfo.fechaCita;
  const bookingCreated = await bookingData.findOneResult({fechaCita: fechaCita});
  if (bookingCreated) {
    return {error: 'Ya existe una cita para esa fecha y hora'};
  }
  const createBooking = await bookingData.insertOne(bookingInfo);
  if (!createBooking) {
    return {error: 'No se creó la cita'};
  } else {
    return {success: 'Se agendó la cita exitosamente'};
  }
};

exports.updateDate = async (dateUpdate) => {
  const {id, fechaCita, estado, idTatuador, idCliente, idPiercing, idTatuaje, fotoConsentimiento} = dateUpdate;
  const dateToUpdate = {
    fechaCita: fechaCita,
    estado: estado,
    idTatuador: idTatuador,
    idCliente: idCliente,
    idPiercing: idPiercing,
    idTatuaje: idTatuaje,
    fotoConsentimiento: fotoConsentimiento,
  };
  const dateExists = await bookingData.findOneResult({fechaCita: fechaCita});
  const dateUpdated = await bookingData.updateOne({_id: id}, dateToUpdate);
  console.log(dateUpdated)
  if (!dateUpdated) { // Verificar tambien si el tatuador a elegir está ocupado
    return {error: 'No se actualizó'};
  } else if (dateExists) {
    return {error: `La fecha ${fechaCita} ya está ocupada`};
  } else {
    return {success: 'Se actualizo correctamente'};
  }
};

exports.deleteDate = async (id) => {
  const dateDeleted = await bookingData.deleteOne(id);
  if (dateDeleted) {
    return {success: 'Se eliminó la cita'};
  } else {
    return {error: 'No se eliminó'};
  }
};
