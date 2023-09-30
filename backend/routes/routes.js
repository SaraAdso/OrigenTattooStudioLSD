const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const controllerClients = require('../controller/clients.controller');
const controllerBooking = require('../controller/booking.controller');
const controllerPiercings = require('../controller/piercings.controller');
const controllerTattooArtists = require('../controller/tattooartists.controller');
const controllerUsers = require('../controller/users.controller');

// CRUD CLIENT

router.get('/showclient', controllerClients.showClientController);
router.post('/newclient', controllerClients.createClientController);
router.post('/updateclient', controllerClients.updateClientController);
router.delete('/deleteclient', controllerClients.deleteClientController);


// BOOKING

router.post('/newbooking', controllerBooking.createBookingController);

// CRUD PIERCINGS

router.post('/newpiercing', controllerPiercings.createPiercingController);
router.get('/showpiercing', controllerPiercings.showPiercingController);
router.post('/updatepiercing', controllerPiercings.updatePiercingController);
router.delete('/deletepiercing', controllerPiercings.deletePiercingController);


// CRUD TATTOO ARTIST

router.post('/newtattooartist', controllerTattooArtists.createtattooArtistController);
router.get('/showtattooartist', controllerTattooArtists.showTattooArtistController);
router.post('/updatetattooartist', controllerTattooArtists.updatetattooArtistController);
router.delete('/deletetattooartist', controllerTattooArtists.deletetattooArtistController);

// CRUD USERS

router.post('/newuser', controllerUsers.createUserController);
router.get('/showuser', controllerUsers.showUserController);
router.post('/updateuser', controllerUsers.updateUserController);
router.delete('/deleteuser', controllerUsers.deleteUserController);

module.exports = router;
