const clientUseCases = require('./usecases/clients.usecase');

exports.createClientController = async(req, res) =>{
  try {
    const result = await clientUseCases.createClient(req.body);

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