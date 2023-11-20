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
    }
  } catch (error) {
    console.log(error);
  }
};

exports.createBooking = async (req, res) => {
  try {
    const body = req.body;
    body.estado = "activo";
    const result = await bookingUseCases.createBooking(body);

    if (result.error) {
      res.redirect('/admin/booking'); ///Hay que cambiarlo por un aviso de fallo
    } else if (result.success) {
        res.redirect('/successfull');
    }
  } catch (error) {
    console.log(error);
  }
};


exports.updateBookingController = async (req, res) =>{
  try {
    const result = await bookingUseCases.updateDate(req.body);
    console.log(result)
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
    const result = await bookingUseCases.deleteDate(req.body);

    if (result.error) {
      res.redirect('/admin/booking'); ///Hay que cambiarlo por un aviso de fallo
    } else if (result.success) {
        res.redirect('/admin/booking');
    }
  } catch (error) {
    console.log(error);
  }
};

exports.saveBooking = async (req, res) => {
  try {
      const body = req.body;
      var result;
      if (body.id && body.id != '') {
          result = await bookingUseCases.updateBooking(body);
      } else {
          console.log(body)
          result = await bookingUseCases.createBooking(body);
      }

      if (result.error) {
          res.redirect('/admin/booking'); ///Hay que cambiarlo por un aviso de fallo
      } else if (result.success) {
          res.redirect('/admin/booking');
      }
  } catch (error) {
      console.log(error);
  }
};