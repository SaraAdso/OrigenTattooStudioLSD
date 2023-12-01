const tattooUseCases = require('../usecases/tattoos.usecase');

exports.showTattooController = async (req, res) =>{
  try {
    const result = await tattooUseCases.showTattoos();

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

exports.createTattooController = async (req, res) => {
  try {
    const imageDestination = `/assets/images/${req.file.originalname}`;
    req.body.imagen = imageDestination;
    const result = await tattooUseCases.createTattoo(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/admintattoos');
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateTattooController = async (req, res) =>{
  try {
    const result = await tattooUseCases.updateTattoo(req.body);
    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/admintattoos');
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTattooController = async (req, res) =>{
  try {
    const result = await tattooUseCases.deleteTattoo(req.params.id);
    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/admintattoos');
    }
  } catch (error) {
    console.log(error);
  }
};

