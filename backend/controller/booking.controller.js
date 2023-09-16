const bookingUseCases = require('../controller/usecases/booking.usecase');

exports.createBookingController = async(req, res) => {
    try {
        const result = await bookingUseCases.createDate(req.body);
        
        if(result.error){
            return res.json({
                error: result.error
            });
        } else if (result.success){
            return res.json({
                success: result.success
            })
        }
    } catch (error) {
        console.log(error)
    }
}