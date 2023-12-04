const bookingUseCases = require('../usecases/booking.usecase');

exports.showBookingController = async (req, res) =>{
  try {
    const result = await bookingUseCases.showBooking();

    if (result.error) {
      return {
        error: result.error,
      };
    } else if (result.success) {
      return {
        success: result.success,
      };
    };
  } catch (error) {
    console.log(error);
  }
};
exports.createBookingController = async (req, res) => {
  try {
    const result = await bookingUseCases.createDate(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};


exports.updateBookingController = async (req, res) =>{
  try {
    const result = await bookingUseCases.updateDate(req.body);
    console.log(result);
    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        success: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteBookingController = async (req, res) => {
  try {
    const result = await bookingUseCases.deleteDate(req.params.id);
    const usuariologueado = req.cookies.rol;
    if (result.error) {
      return res.json({
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
    console.log(error);
  }
};
