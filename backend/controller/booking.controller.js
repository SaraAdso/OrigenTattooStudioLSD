const bookingUseCases = require('../usecases/booking.usecase');

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

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        error: result.success,
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
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        error: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
