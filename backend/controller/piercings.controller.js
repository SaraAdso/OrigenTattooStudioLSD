const piercingsUseCases = require('../usecases/piercings.usecase');

exports.showPiercingController = async (req, res) =>{
  try {
    const result = await piercingsUseCases.showPiercings();

    if (result.error) {
      return{
        error: result.error,
      };
    } else if (result.success) {
      return{
        success: result.success,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
exports.createPiercingController = async (req, res) =>{
  try {
    const result = await piercingsUseCases.createPiercing(req.body);

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

exports.updatePiercingController = async (req, res) =>{
  try {
    const result = await piercingsUseCases.updatePiercing(req.body);

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

exports.deletePiercingController = async (req, res) => {
  try {
    const result = await piercingsUseCases.deletePiercing(req.body);

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
