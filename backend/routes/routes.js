const express = require('express');
const router = express.Router();

const controllerClients = require('../controller/clients.controller');
const controllerBooking = require('../controller/booking.controller');
const controllerPiercings = require('../controller/piercings.controller');

router.post('/newclient', controllerClients.createClientController);
router.post('/newbooking', controllerBooking.createBookingController);
router.post('/newpiercing', controllerPiercings.createPiercingController);
module.exports = router