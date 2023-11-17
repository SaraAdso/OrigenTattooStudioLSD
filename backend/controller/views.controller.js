const { showClientController } = require("./clients.controller");
///const { showBookingController } = require("./booking.controller");

exports.showLandingPage = async (req, res) => {
    res.render('landingpage')
};

exports.showFormRegister = async (req, res) => {
    res.render('registerclients')
};

exports.showFormLogin = async (req, res) => {
    res.render('loginclients')
};
exports.showFormAdmin = async (req, res) => {
    const client = await showClientController();
    console.log(client)
    res.render('adminusers', {
        clientes: client.success,
    });
};
exports.showFormTattoo = async (req, res) => {
    res.render('tattoo')
};
exports.showFormBooking = async (req, res) => {
    res.render('booking')
};
exports.showFormPiercing = async (req, res) => {
    res.render('piercing')
};
exports.showLandingAdmin = async (req, res) => {
    res.render('landingadmin')
};

///***exports.showAdminBooking = async (req, res) => {
 /// const booking = await showAdminBooking();
 ///console.log(booking)
  ///  res.render('adminbooking', {
   ///     clientes: booking.success,
   ///}); };///

