const {showClientController} = require('./clients.controller');
const {showPiercingController} = require('./piercings.controller');
const {showTattooController} = require('./tattoos.controller');
const {showBookingController} = require('./booking.controller');
const {showTattooArtistController} = require('./tattooartists.controller');
const {showClient} = require('../usecases/clients.usecase');
const booking = require('../models/booking.model');

exports.showLandingAdmin = async (req, res) => {
  res.render('landingadmin');
};

exports.showLandingPage = async (req, res) => {
  const tattoos = await showTattooController();
  const piercings = await showPiercingController();
  const tattooartists = await showTattooArtistController();
  res.render('landingpage', {
    tattoos: tattoos.success,
    piercings: piercings.success,
    tattooartists: tattooartists.success,
    rol: req.cookies.rol,
    usuariologueado: req.cookies.usuariologueado,
  });
};

exports.showClientProfile = async (req, res) => {
  const client = await showClient(req.cookies.usuariologueado);
  const tattooartist = await showTattooArtistController();
  res.render('clientprofile', {
    client: client.client,
    bookings: client.bookings,
    tattooartist: tattooartist,
  });
}
exports.showFormRegister = async (req, res) => {
  res.render('registerclients');
};

exports.showFormLogin = async (req, res) => {
  if (req.cookies.usuariologueado) {
    res.redirect('/profile');
  } else {
    res.render('loginclients');
  }
};

exports.showTattoosCatalogue = async (req, res) => {
  const tattoos = await showTattooController();
  res.render('tattooscatalogue', {
    tattoos: tattoos.success,
  });
};

exports.showPiercingsCatalogue = async (req, res) => {
  const piercing = await showPiercingController();
  res.render('piercingscatalogue', {
    piercings: piercing.success,
  });
};

exports.showFormBooking = async (req, res) => {
  const piercing = await showPiercingController();
  const tattoo = await showTattooController();
  const tattooartist = await showTattooArtistController();
  console.log(req.cookies.rol);
  const client = req.cookies.usuariologueado;
  res.render('makebooking', {
    piercings: piercing.success,
    tattoos: tattoo.success,
    tattooartists: tattooartist.success,
    client: client,
  });
};

exports.showErrorBooking = async (req, res) => {
  res.render('error');
};

exports.showSuccessfullBooking = async (req, res) => {
  res.render('successfull');
};

// ADMIN

exports.showAdminTattoo = async (req, res) => {
  const tattoo = await showTattooController();
  const tattooartist = await showTattooArtistController();
  res.render('admintattoos', {
    tattoos: tattoo.success,
    tattooartists: tattooartist.success,
  });
};

exports.showAdminPiercing = async (req, res) => {
  const piercing = await showPiercingController();
  res.render('adminpiercings', {
    piercings: piercing.success,
  });
};

exports.showAdminTattooArtists = async (req, res) => {
  const tattooartist = await showTattooArtistController();
  res.render('admintattooartists', {
    tattooartists: tattooartist.success,
  });
};

exports.showAdminClients = async (req, res) => {
  const cliente = await showClientController();
  res.render('adminclients', {
    clientes: cliente,
  });
};

exports.showAdminBooking = async (req, res) => {
  const booking = await showBookingController();
  const piercing = await showPiercingController();
  const tattoo = await showTattooController();
  const tattooartist = await showTattooArtistController();
  const client = await showClientController();
  console.log(client);
  res.render('adminbooking', {
    bookings: booking.success,
    piercings: piercing.success,
    tattoos: tattoo.success,
    tattooartists: tattooartist.success,
    clients: client.success,
  });
};

exports.showSuccessfull = async (req, res) => {
  res.render('successfull');
};

exports.showError = async (req, res) => {
  res.render('error');
};

exports.logout = async (req, res) => {
  try {
    return res.clearCookie('usuariologueado').clearCookie('rol').redirect('/');
  } catch (error) {
    console.log(error);
  }
};
// exports.showFormBooking = async (req, res) => {
//  res.render('booking')
// };


// ***exports.showAdminBooking = async (req, res) => {
//  const booking = await showAdminBooking();
// console.log(booking)
// res.render('adminbooking', {
// clientes: booking.success,
// }); };///

