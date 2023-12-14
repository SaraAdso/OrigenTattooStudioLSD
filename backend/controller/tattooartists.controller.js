const tattooArtistUseCases = require('../usecases/tattooartists.usecase');
const fs = require('fs');
exports.showTattooArtistController = async (req, res) => {
  try {
    const result = await tattooArtistUseCases.showTattooArtists();

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
      error: result.error,
    });
  }
};

exports.createtattooArtistController = async (req, res) => {
  try {
    const imageDestination = `/assets/images/${req.file.originalname}`;
    req.body.fotoTatuador = imageDestination;
    const result = await tattooArtistUseCases.createTattooArtists(req.body);

    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/admintattooartists');
    }
  } catch (error) {
    return res.render('error', {
      error: result.error,
    });
  }
};

exports.updatetattooArtistController = async (req, res) => {
  try {
    const result = await tattooArtistUseCases.updateTattooArtist(req.body);
    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/admintattooartists');
    }
  } catch (error) {
    return res.render('error', {
      error: result.error,
    });
  }
};

exports.deletetattooArtistController = async (req, res) => {
  try {
    const result = await tattooArtistUseCases.deleteTattooArtist(req.params.id);
    console.log(result);
    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result) {
      fs.unlink(`./frontend/static${ result.tattooArtistDeleted.fotoTatuador }`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
      return res.redirect('/admintattooartists');
    }
  } catch (error) {
    return res.render('error', {
      error: result.error,
    });
  }
};
