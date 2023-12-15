const bookingUseCases = require('../usecases/booking.usecase');
const { showPiercingController } = require('./piercings.controller');
const { showTattooArtistController } = require('./tattooartists.controller');

exports.showBookingController = async (req, res) => {
  try {
    const result = await bookingUseCases.showBooking();

    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      return {
        success: result.success,
      };
    };
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  }
};
exports.createBookingController = async (req, res) => {
  try {
    const result = await bookingUseCases.createDate(req.body);
    const tattooartist = await showTattooArtistController();
    const piercing = await showPiercingController();
    if (result.error) {
      return res.render('makebooking', {
        tattooartists: tattooartist.success,
        piercings: piercing.success,
        error: result.error,
        client: req.cookies.usuariologueado,
        usuariologueado: req.cookies.usuariologueado,
      });
    } else if (result.success) {
      return res.redirect('/clientprofile');
    }
  } catch (error) {
    console.error(error);
    return res.render('error', {
      error: error,
    });
  }
};

exports.updateBookingController = async (req, res) => {
  try {
    const result = await bookingUseCases.updateDate(req.body);
    console.log(result);
    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  };
};

exports.deleteBookingController = async (req, res) => {
  try {
    const result = await bookingUseCases.deleteDate(req.params.id);
    const usuariologueado = req.cookies.rol;
    console.log(result);
    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      if (usuariologueado == 'Administrador') {
        return res.redirect('/adminbooking');
      } else {
        return res.redirect('/clientprofile');
      }
    }
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  }
};
