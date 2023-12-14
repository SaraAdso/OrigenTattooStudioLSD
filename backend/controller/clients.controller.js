const clientUseCases = require('../usecases/clients.usecase');

exports.showClientController = async (req, res) => {
  try {
    const result = await clientUseCases.showClients();
    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      return result.success;
    }
  } catch (error) {
    return res.render('error', {
      error: result.error,
    });
  }
};

exports.createClientController = async (req, res) => {
  try {
    const imageDestination = `/assets/images/${req.file.originalname}`;
    req.body.fotoDocumento = imageDestination;
    const result = await clientUseCases.createClient(req.body);

    if (result.error) {
      return res.render('registerclients', { error: result.error });
    } else if (result.success) {
      if (result.rol === 'Cliente') {
        return res.cookie('usuariologueado', result.email).cookie('rol', result.rol).redirect('/clientprofile');
      } else if (result.rol === 'Administrador') {
        return res.cookie('usuariologueado', result.email).cookie('rol', result.rol).redirect('/admin');
      }
    }
  } catch (error) {
    return res.render('error', {
      error: result.error,
    });
  }
};

exports.updateClientController = async (req, res) => {
  try {
    const result = await clientUseCases.updateClient(req.body);

    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      if (req.cookies.rol == 'Administrador') {
        return res.redirect('/adminclients');
      } else if (req.cookies.rol == 'Cliente') {
        return res.redirect('/clientprofile');
      }
    }
  } catch (error) {
    return res.render('error', {
      error: result.error,
    });
  }
};


exports.deleteClientController = async (req, res) => {
  try {
    const result = await clientUseCases.deleteClient(req.params.id);

    if (result.error) {
      return res.render('error', {
        error: result.error,
      });
    } else if (result.success) {
      if (req.cookies.rol == 'Administrador') {
        return res.redirect('/adminclients');
      } else {
        return res.redirect('/');
      }
    }
  } catch (error) {
    return res.render('error', {
      error: result.error,
    });
  }
};
