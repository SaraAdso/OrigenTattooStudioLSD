const tattooUseCases = require('../usecases/tattoos.usecase');

exports.showTattooController = async (req, res) => {
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
        const result = await tattooUseCases.createTattoo(req.body);

        if (result.error) {
            return res.json({
                error: result.error
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

exports.updateTattooController = async (req, res) => {
    try {
        const result = await tattooUseCases.updateTattoo(req.body);

        if (result.error) {
            return res.json({
                error: result.error,
            });
        } else if (result.success) {
            return res.json({
                success: result.success
            });
        }
    } catch (error) {
        console.log(error)
    }
}

exports.deleteTattooController = async (req, res) => {
    try {
        const result = await tattooUseCases.deleteTattoo(req.params['id']);
        if (result.error) {
            res.redirect('/admin/tattoo'); ///Hay que cambiarlo por un aviso de fallo
        } else if (result.success) {
            res.redirect('/admin/tattoo');
        }
    } catch (error) {
        console.log(error);
    }
};

exports.saveTattoo = async (req, res) => {
    try { 
        const body = req.body;
        var result;
        if (body.id && body.id != '') {
            result = await tattooUseCases.updateTattoo(body);
        } else {
            console.log(body)
            result = await tattooUseCases.createTattoo(body);
        }

        if (result.error) {
            res.redirect('/admin/tattoo'); ///Hay que cambiarlo por un aviso de fallo
        } else if (result.success) {
            res.redirect('/admin/tattoo');
        }
    } catch (error) {
        console.log(error);
    }
};