const userUseCases = require('../usecases/users.usecase');

exports.showUserController = async (req, res) => {
  try {
    const result = await userUseCases.showUsers()
        
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
  
  exports.updateUserController = async (req, res) =>{
    try {
      const result = await userUseCases.updateUser(req.body);
  
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
  
  exports.deleteUserController = async (req, res) => {
    try {
      const result = await userUseCases.deleteUser(req.body);
  
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
  