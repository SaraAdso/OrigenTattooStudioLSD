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

// create user
/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    propieties:
 *     correo:
 *      type: string
 *      description: el correo del usuario
 *     contrasena:
 *      type: string
 *      description: contrasena del usuario
 *     rol:
 *      type: string
 *      description: rol de usuario, sea cliente o tattoo artist
 *    required:
 *     - correo
 *     - contrasena
 *     - rol
 *    example:
 *     correo: alan@gmail.com
 *     contrasena: 123456789
 *     rol: cliente
 *
 */

/**
 * @swagger
 * /api/v1/:
 *  post:
 *    summary: create new user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: new user created
 *
 *
 */
router.post('/newuser', controllerUsers.createUserController);
router.get('/showuser', controllerUsers.showUserController);
router.post('/updateuser', controllerUsers.updateUserController);
router.delete('/deleteuser', controllerUsers.deleteUserController);

module.exports = router;
