const { showClientController } = require("./clients.controller");
const { showPiercingController } = require("./piercings.controller");
const { showTattooController } = require("./tattoos.controller");
const { showBookingController } = require("./booking.controller");
const { showTattooArtistController } = require("./tattooartists.controller");

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
    const tattoo = await showTattooController();
    res.render('tattooscatalogue',{
        tattoos: tattoo.success,
    })
};

exports.showPiercingsCatalogue = async (req, res) => {
    const piercing = await showPiercingController();
    res.render('piercingscatalogue',{
        piercings: piercing.success
    })
};

exports.showFormBooking = async (req, res) => {
    const piercing = await showPiercingController();
    const tattoo = await showTattooController();
    res.render('makebooking', {
        piercings: piercing.success,
        tattoos: tattoo.success
    });
};

//ADMIN

exports.showFormAdmin = async (req, res) => {
    const client = await showClientController();
    console.log(client)
    res.render('adminusers', {
        clientes: client.success,
    });
};
exports.showAdminTattoo = async (req, res) => {
    const tattoo = await showTattooController();
    res.render('admintattoos',{
        tattoos: tattoo.success
    })
};

exports.showAdminPiercing = async (req, res) => {
    const piercing = await showPiercingController();
    res.render('adminpiercings',{
        piercings: piercing.success
    })
};

exports.showAdminTattooArtists = async (req, res) => {
    const tattooartist = await showTattooArtistController();
    res.render('admintattooartists', {
        tattooartists: tattooartist.success,
    });
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

exports.showError = async (req, res) => {
    res.render('error')
};



exports.showClientCrud = async (req, res) => {
    const clients= await showClientController();
    res.render('clientscrud', {
        clients: clients.success,
    });
};



//exports.showFormBooking = async (req, res) => {
  //  res.render('booking')
//};


///***exports.showAdminBooking = async (req, res) => {
 /// const booking = await showAdminBooking();
 ///console.log(booking)
  ///  res.render('adminbooking', {
   ///     clientes: booking.success,
   ///}); };///

