exports.showLandingPage = async (req, res) => {
    res.render('landingpage')
}

exports.showFormRegister = async (req,res) => {
    res.render('registerclients')
}

exports.showFormLogin = async (req,res) => {
    res.render('loginclients')
}