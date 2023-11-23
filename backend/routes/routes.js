const express = require('express');
const router = express.Router();


// Controllers
const controllerBooking = require('../controller/booking.controller');
const controllerClients = require('../controller/clients.controller');
const controllerPiercings = require('../controller/piercings.controller');
const controllerTattooArtists = require('../controller/tattooartists.controller');
const controllerTattoos = require('../controller/tattoos.controller');
const controllerUsers = require('../controller/users.controller');
const controllerViews = require('../controller/views.controller');

router.get('/landing', controllerViews.showLandingPage);
router.get('/formregister', controllerViews.showFormRegister);
router.get('/formlogin', controllerViews.showFormLogin);
router.get('/formadmin', controllerViews.showFormAdmin);
router.get('/tattoo', controllerViews.showTattoo);
router.get('/formbooking', controllerViews.showFormBooking);
router.get('/piercing', controllerViews.showFormPiercing);
router.get('/landingadmin', controllerViews.showLandingAdmin);
router.get('/error', controllerViews.showError);

//Tattoo CRUD

router.get('/admin/tattoo', controllerViews.showAdminTattoo);
router.get('/admin/deletetattoo/:id', controllerTattoos.deleteTattooController);
router.post('/admin/guardar', controllerTattoos.saveTattoo);

//Piercing CRUD

router.get('/admin/piercing', controllerViews.showAdminPiercing);
router.get('/admin/deletepiercing/:id', controllerPiercings.deletePiercingController);
router.post('/admin/guardarpiercing', controllerPiercings.savePiercing);

//Booking CRUD

router.get('/admin/booking', controllerViews.showAdminBooking);
router.get('/admin/deletebooking/:id', controllerBooking.deleteBookingController);
router.post('/admin/guardarbooking', controllerBooking.saveBooking);
router.post('/guardarbooking', controllerBooking.createBooking);
router.get('/successfull', controllerViews.showSuccessfull);


module.exports = router ;