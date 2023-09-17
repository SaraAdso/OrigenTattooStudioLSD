const express = require('express');
const router = express.Router();

const controllerClients = require('../controller/clients.controller');
const controllerBooking = require('../controller/booking.controller');
const controllerPiercings = require('../controller/piercings.controller');
const controllerTattooArtist = require('../controller/tattooartists.controller');
const controllerUsers = require('../controller/users.controller');

router.get('/showclient', controllerClients.showClientController);
router.post('/newclient', controllerClients.createClientController);
router.post('/updateclient', controllerClients.updateClientController);
router.delete('/deleteclient', controllerClients.deleteClientController);

router.post('/newbooking', controllerBooking.createBookingController);
router.post('/newpiercing', controllerPiercings.createPiercingController);

router.post('/newtattoartist', controllerTattooArtist.createArtistController);

router.post('/newuser', controllerUsers.createUserController);
module.exports = router