const { showClientController } = require("./clients.controller");
///const { showBookingController } = require("./booking.controller");

exports.showLandingAdmin = async (req, res) => {
    res.render('landingadmin')
}
exports.showLandingPage = async (req, res) => {
    res.render('landingpage')
}

exports.showFormRegister = async (req,res) => {
    res.render('registerclients')
}

exports.showFormLogin = async (req,res) => {
    res.render('loginclients')
}

exports.showTattoosCatalogue = async (req, res) => {
    res.render('tattooscatalogue')
}

exports.showPiercingsCatalogue = async (req, res) => {
    res.render('piercingscatalogue')
}
exports.showFormAdmin = async (req, res) => {
    const client = await showClientController();
    console.log(client)
    res.render('adminusers', {
        clientes: client.success,
    });
};
exports.showFormBooking = async (req, res) => {
    res.render('booking')
};


///***exports.showAdminBooking = async (req, res) => {
 /// const booking = await showAdminBooking();
 ///console.log(booking)
  ///  res.render('adminbooking', {
   ///     clientes: booking.success,
   ///}); };///

