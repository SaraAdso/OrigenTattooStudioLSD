const bookingData = require('../data-access/booking.data');
const moment = require('moment-timezone');

exports.showBooking = async () => {
  const booking = await bookingData.findAll();
  if (!booking) {
    return { error: 'No se encontró ninguna cita' };
  } else {
    return { success: booking };
  }
};

// agregar una para find one
exports.createDate = async (dateInfo) => {
  const {fechaCita} = dateInfo;
  const fechaCitaFormatUTC = moment.utc(fechaCita).toISOString();
  dateInfo.fechaCita = fechaCitaFormatUTC;
  const fechaCitaLocal = moment(fechaCitaFormatUTC).tz('America/Bogota');
  const twoHoursLater = moment(fechaCitaLocal).add(3, 'hours').toDate();
  const overlappingDates = await bookingData.findOneResult({
    fechaCita: {
      $gte: fechaCitaLocal,
      $lt: twoHoursLater,
    },
  });
  if (overlappingDates && overlappingDates.idTatuador == dateInfo.idTatuador) {
    return {error: 'Ya existe una cita para esa fecha y hora'};
  }
  const twoHoursEarlier = moment(fechaCitaLocal).subtract(2, 'hours').toDate();
  const overlappingDatesBefore = await bookingData.findOneResult({
    fechaCita: {
      $gte: twoHoursEarlier,
      $lt: fechaCitaLocal,
    },
  });
  if (overlappingDatesBefore && overlappingDatesBefore.idTatuador == dateInfo.idTatuador) {
    return {error: 'No se puede agendar una cita en el medio de otra'};
  }
  const artistOccupied = await bookingData.findOneResult({
    fechaCita: {
      $gte: fechaCitaLocal,
      $lt: twoHoursLater,
    },
    tattooArtist: dateInfo.tattooArtist,
  });
  if (artistOccupied) {
    if (artistOccupied.idTatuador == dateInfo.idTatuador) {
      return {error: 'El artista ya tiene una cita para esa fecha y hora'};
    }
  }
  if (fechaCitaLocal.hour() < 5 || fechaCitaLocal.hour() >= 16) {
    return {error: 'La hora de la cita debe estar entre las 10am y las 9pm'};
  }
  const createDate = await bookingData.insertOne(dateInfo);
  if (!createDate) {
    return {error: 'No se pudo crear la cita exitosamente'};
  } else {
    return {success: 'Se agendó la cita exitosamente'};
  }
};


exports.deleteDate = async (id) => {
  const dateDeleted = await bookingData.deleteOne(id);
  if (dateDeleted) {
    return { success: 'Se eliminó la cita' };
  } else {
    return { error: 'No se eliminó' };
  }
};
