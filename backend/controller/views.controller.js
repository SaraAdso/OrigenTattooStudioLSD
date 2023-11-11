const { showClientController } = require("./clients.controller");

exports.showLandingPage = async (req, res) => {
    res.render('landingpage')
};

exports.showFormRegister = async (req, res) => {
    res.render('registerclients')
};

exports.showFormLogin = async (req, res) => {
    res.render('loginclients')
};
exports.showFormAdmin = async (req,res) => {
    const client = await showClientController();
    console.log(client)
    res.render('admin', {
        clientes: client.success,
    });
};