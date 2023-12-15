const piercingsUseCases = require('../usecases/piercings.usecase');
const fs = require('fs');

exports.showPiercingController = async (req, res) =>{
  try {
    const result = await piercingsUseCases.showPiercings();

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
exports.createPiercingController = async (req, res) =>{
  try {
    const imageDestination = `/assets/images/${req.file.originalname}`;
    req.body.imagen = imageDestination;
    const result = await piercingsUseCases.createPiercing(req.body);

    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/adminpiercings');
    }
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  }
};

exports.updatePiercingController = async (req, res) =>{
  try {
    const result = await piercingsUseCases.updatePiercing(req.body);
    console.log(req.body);
    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/adminpiercings');
    }
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  }
};

exports.deletePiercingController = async (req, res) => {
  try {
    const result = await piercingsUseCases.deletePiercing(req.params.id);

    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      fs.unlink(`./frontend/static${ result.piercing.imagen}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
      return res.redirect('/adminpiercings');
    }
  } catch (error) {
    return res.render('error', {
      error: error,
    });
  }
};
