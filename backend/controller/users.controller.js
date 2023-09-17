const userUseCases = require('./usecases/users.usecase');
exports.createUserController = async (req, res) =>{
  try {
    const result = await userUseCases.createUser(req.body);

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