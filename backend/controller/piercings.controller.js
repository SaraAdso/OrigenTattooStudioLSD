const piercingsUseCases = require('../usecases/piercings.usecase');

exports.showPiercingController = async (req, res) =>{
  try {
    const result = await piercingsUseCases.showPiercings();

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
exports.createPiercingController = async (req, res) =>{
  try {
    const imageDestination = `/assets/images/${req.file.originalname}`;
    req.body.imagen = imageDestination;
    const result = await piercingsUseCases.createPiercing(req.body);

    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/adminpiercings');
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updatePiercingController = async (req, res) =>{
  try {
    const result = await piercingsUseCases.updatePiercing(req.body);
    console.log(req.body)
    if (result.error) {
      return res.json({
        error: result.error,
      });
    } else if (result.success) {
      return res.redirect('/adminpiercings');
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deletePiercingController = async (req, res) => {
  try {
    const result = await piercingsUseCases.deletePiercing(req.params.id);

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

  }
};
