/* eslint-disable new-cap */
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

router.get('/admin', controllerViews.showLandingAdmin);
router.get('/', controllerViews.showLandingPage);
router.get('/formregister', controllerViews.showFormRegister);
router.get('/formlogin', controllerViews.showFormLogin);
router.get('/tattoocatalogue', controllerViews.showTattoosCatalogue);
router.get('/piercingscatalogue', controllerViews.showPiercingsCatalogue);
router.get('/makeabooking', controllerViews.showFormBooking);
router.get('/bookingerror', controllerViews.showErrorBooking);
router.get('/bookingsuccess', controllerViews.showSuccessfullBooking);
const upload = require('../middleware/uploadimages');

// ADMIN
// Tatuajes
router.get('/admintattoos', controllerViews.showAdminTattoo);

// Piercings
router.get('/adminpiercings', controllerViews.showAdminPiercing);

// Tatuadores
router.get('/admintattooartists', controllerViews.showAdminTattooArtists);

// Citas
router.get('/adminbooking', controllerViews.showAdminBooking);
// Booking
// SHOW BOOKING
router.get('/showbooking', controllerBooking.showBookingController);
// CREATE BOOKING
router.post('/newbooking', controllerBooking.createBookingController);

router.post('/updatebooking', controllerBooking.updateBookingController);
// DELETE BOOKING
router.delete('/deletebooking', controllerBooking.deleteBookingController);

// Clients
// SHOW CLIENT
router.get('/showclient', controllerClients.showClientController);
// CREATE CLIENT
router.post('/newclient', upload.single('fotoDocumento'), controllerClients.createClientController);
// UPDATE CLIENT
router.post('/updateclient', controllerClients.updateClientController);
// DELETE CLIENT
router.delete('/deleteclient', controllerClients.deleteClientController);
router.post('/loginclient', controllerUsers.loginUsersController);


// Piercings
// SHOW PIERCINGS
router.get('/showpiercing', controllerPiercings.showPiercingController);
// CREATE PIERCING
router.post('/newpiercing', upload.single('imagen'), controllerPiercings.createPiercingController);
// UPDATE PIERCING
router.post('/updatepiercing', controllerPiercings.updatePiercingController);
// DELETE PIERCING
router.delete('/deletepiercing', controllerPiercings.deletePiercingController);

// Tattoos
// SHOW TATTOOS
router.get('/showtattoo', controllerTattoos.showTattooController);
// CREATE TATTOO
router.post('/newtattoo', upload.single('imagen'), controllerTattoos.createTattooController);
// UPDATE TATTOO
router.post('/updatetattoo', controllerTattoos.updateTattooController);
// DELETE TATTOO
router.delete('/deletetattoo', controllerTattoos.deleteTattooController);

// Users
// SHOW USERS
router.get('/showuser', controllerUsers.showUserController);
// CREATE USER
router.post('/newuser', controllerUsers.createUserController);
// UPDATE USER
router.post('/updateuser', controllerUsers.updateUserController);
// DELETE USERS
router.delete('/deleteuser', controllerUsers.deleteUserController);

// tattooartists
// SHOW TATTOOARTISTS
router.get('/showtattooartist', controllerTattooArtists.showTattooArtistController);
// CREATE TATTOOARTIST
router.post('/newtattooartist', upload.single('fotoDocumento'), controllerTattooArtists.createtattooArtistController);
// UPDATE TATTOOARTIST
router.post('/updatetattoartist', controllerTattooArtists.updatetattooArtistController);
// DELETE TATTOOARTIST
router.delete('/deletetattoortist', controllerTattooArtists.deletetattooArtistController);
module.exports = router;
