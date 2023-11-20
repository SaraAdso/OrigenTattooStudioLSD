const { showClientController } = require("./clients.controller");
const { showPiercingController } = require("./piercings.controller");
const { showTattooController } = require("./tattoos.controller");
const { showBookingController } = require("./booking.controller");

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
exports.showTattoo = async (req, res) => {
    const tattoo = await showTattooController();
    res.render('tattoo',{
        tattoos: tattoo.success,
    })
};
exports.showFormBooking = async (req, res) => {
    const piercing = await showPiercingController();
    const tattoo = await showTattooController();
    res.render('booking', {
        piercings: piercing.success,
        tattoos: tattoo.success
    });
};
exports.showFormPiercing = async (req, res) => {
    const piercing = await showPiercingController();
    res.render('piercing',{
        piercings: piercing.success
    })
};
exports.showLandingAdmin = async (req, res) => {
    res.render('landingadmin')
};
exports.showAdminTattoo = async (req, res) => {
    const tattoo = await showTattooController();
    res.render('admintattoo',{
        tattoos: tattoo.success
    })
};

exports.showAdminPiercing = async (req, res) => {
    const piercing = await showPiercingController();
    res.render('adminpiercing',{
        piercings: piercing.success
    })
};

exports.showAdminBooking = async (req, res) => {
    const booking = await showBookingController();
    const piercing = await showPiercingController();
    const tattoo = await showTattooController();
    res.render('adminbooking', {
        bookings: booking.success,
        piercings: piercing.success,
        tattoos: tattoo.success
    });

 };

 exports.showSuccessfull = async (req, res) => {
    res.render('successfull')
};