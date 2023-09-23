const tattooArtistUseCases = require('../usecases/tattooartists.usecase');
exports.showTattooArtistController = async (req, res) =>{
  try {
    const result = await tattooArtistUseCases.showTattooArtists();

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
exports.createtattooArtistController = async (req, res) => {
  try {
    const result = await tattooArtistUseCases.createTattooArtists(req.body);

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


exports.updatetattooArtistController = async (req, res) =>{
  try {
    const result = await tattooArtistUseCases.updateTattooArtist(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        error: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deletetattooArtistController = async (req, res) => {
  try {
    const result = await tattooArtistUseCases.deleteTattooArtist(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.json({
        error: result.success,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
