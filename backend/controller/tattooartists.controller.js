const tattooArtistUseCases = require('../usecases/tattooartists.usecase');

exports.createTattooArtistsController = async (req, res) => {
  try {
    const result = await tattooArtistCases.createClient(req.body);

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
