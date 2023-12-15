const tattooUseCases = require('../usecases/tattoos.usecase');
const fs = require('fs');

exports.showTattooController = async (req, res) =>{
  try {
    const result = await tattooUseCases.showTattoos();

    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      return {
        success: result.success,
      };
    }
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  }
};

exports.createTattooController = async (req, res) => {
  try {
    const imageDestination = `/assets/images/${req.file.originalname}`;
    req.body.imagen = imageDestination;
    const result = await tattooUseCases.createTattoo(req.body);

    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/admintattoos');
    }
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  }
};

exports.updateTattooController = async (req, res) =>{
  try {
    const result = await tattooUseCases.updateTattoo(req.body);
    console.log(req.body);
    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/admintattoos');
    }
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  }
};

exports.deleteTattooController = async (req, res) =>{
  try {
    const result = await tattooUseCases.deleteTattoo(req.params.id);
    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      fs.unlink(`./frontend/static${ result.tattoo.imagen }`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
      return res.redirect('/admintattoos');
    }
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  }
};

