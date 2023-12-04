const bookingData = require('../data-access/booking.data');
const moment = require('moment-timezone');

exports.showBooking = async () => {
  const booking = await bookingData.findAll();
  if (!booking) {
    return {error: 'No se encontró ningún cliente'};
  } else {
    return {success: booking};
  }
};

// agregar una para find one

exports.createDate = async (dateInfo) => {
  const {fechaCita} = dateInfo;

  const fechaCitaFormatUTC = moment.utc(fechaCita).toISOString();
  dateInfo.fechaCita = fechaCitaFormatUTC;

  const fechaCitaLocal = moment(fechaCitaFormatUTC).tz('America/Bogota');

  const twoHoursLater = moment(fechaCitaLocal).add(2, 'hours').toDate();
  const overlappingDates = await bookingData.findOneResult({
    fechaCita: {
      $gte: fechaCitaLocal,
      $lt: twoHoursLater,
    },
  });
  if (overlappingDates) {
    return {error: 'Ya existe una cita para esa fecha y hora'};
  }
  const createDate = await bookingData.insertOne(dateInfo);
  if (!createDate) {
    return {error: 'No se creó la cita'};
  } else {
    return {success: 'Se agendó la cita exitosamente'};
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
