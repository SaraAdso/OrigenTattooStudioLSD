const userUseCases = require('../usecases/users.usecase');

exports.showUserController = async (req, res) => {
  try {
    const result = await userUseCases.showUsers();
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
  }
};

exports.createUserController = async (req, res) =>{
  try {
    const result = await userUseCases.createUser(req.body);
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
  }
};

exports.updateUserController = async (req, res) =>{
  try {
    const result = await userUseCases.updateUser(req.body);

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
  }
};

exports.deleteUserController = async (req, res) => {
  try {
    const result = await userUseCases.deleteUser(req.body);
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
  }
};

exports.loginUsersController = async (req, res) => {
  try {
    const result = await userUseCases.loginUser(req.body);

    if (result.error) {
      return res.render('loginclients', {error: result.error});
    } else {
      return res.cookie('rol', result.rol).cookie('usuariologueado', result.email).redirect(result.path);
    }
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  }
};
