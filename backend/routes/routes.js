/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadimages');

// Controllers
const controllerBooking = require('../controller/booking.controller');
const controllerClients = require('../controller/clients.controller');
const controllerPiercings = require('../controller/piercings.controller');
const controllerTattooArtists = require('../controller/tattooartists.controller');
const controllerTattoos = require('../controller/tattoos.controller');
const controllerUsers = require('../controller/users.controller');
const controllerViews = require('../controller/views.controller');

router.get('/admin', controllerViews.adminUser, controllerViews.showLandingAdmin);
router.get('/', controllerViews.showLandingPage);
router.get('/clientprofile', controllerViews.showClientProfile);
router.get('/formregister', controllerViews.showFormRegister);
router.get('/formlogin', controllerViews.showFormLogin);
router.get('/tattoocatalogue', controllerViews.showTattoosCatalogue);
router.get('/piercingscatalogue', controllerViews.showPiercingsCatalogue);
router.get('/makeabooking', controllerViews.showFormBooking);
router.get('/logout', controllerViews.logout);

// ADMIN
// Tatuajes
router.get('/admintattoos', controllerViews.adminUser, controllerViews.showAdminTattoo);

// Piercings
router.get('/adminpiercings', controllerViews.adminUser, controllerViews.showAdminPiercing);

// Tatuadores
router.get('/admintattooartists', controllerViews.adminUser, controllerViews.showAdminTattooArtists);
// Clientes
router.get('/adminclients', controllerViews.adminUser, controllerViews.showAdminClients);

// Citas
router.get('/adminbooking', controllerViews.adminUser, controllerViews.showAdminBooking);
// Booking
// SHOW BOOKING
router.get('/showbooking', controllerBooking.showBookingController);
// CREATE BOOKING
router.post('/newbooking', upload.single('fotoConsentimiento'), controllerBooking.createBookingController);
// DELETE BOOKING
router.get('/deletebooking/:id', controllerBooking.deleteBookingController);

// Clients
// SHOW CLIENT
router.get('/showclient', controllerClients.showClientController);
// CREATE CLIENT
router.post('/newclient', upload.single('fotoDocumento'), controllerClients.createClientController);
// UPDATE CLIENT
router.post('/updateclient', controllerClients.updateClientController);
// DELETE CLIENT
router.get('/deleteclient/:id', controllerClients.deleteClientController);
router.post('/loginclient', controllerUsers.loginUsersController);


// Piercings
// SHOW PIERCINGS
router.get('/showpiercing', controllerPiercings.showPiercingController);
// CREATE PIERCING
router.post('/newpiercing', upload.single('imagen'), controllerPiercings.createPiercingController);
// UPDATE PIERCING
router.post('/updatepiercing', controllerPiercings.updatePiercingController);
// DELETE PIERCING
router.get('/deletepiercing/:id', controllerPiercings.deletePiercingController);

// Tattoos
// SHOW TATTOOS
router.get('/showtattoo', controllerTattoos.showTattooController);
// CREATE TATTOO
router.post('/newtattoo', upload.single('imagen'), controllerTattoos.createTattooController);
// UPDATE TATTOO
router.post('/updatetattoo', controllerTattoos.updateTattooController);
// DELETE TATTOO
router.get('/deletetattoo/:id', controllerTattoos.deleteTattooController);

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
router.post('/newtattooartist', upload.single('fotoTatuador'), controllerTattooArtists.createtattooArtistController);
// UPDATE TATTOOARTIST
router.post('/updatetattoartist', controllerTattooArtists.updatetattooArtistController);
// DELETE TATTOOARTIST
router.get('/deletetattooartist/:id', controllerTattooArtists.deletetattooArtistController);
module.exports = router;
