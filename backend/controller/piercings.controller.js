const piercingsUseCases = require('./usecases/piercings.usecase');

exports.createPiercingController = async(req, res) =>{
    try {
        const result = await piercingsUseCases.createPiercing(req.body);

        if (result.error){
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
};