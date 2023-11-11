const express = require('express');
const router = express.Router();



// Controllers
const controllerBooking = require('../controller/booking.controller');
const controllerClients = require('../controller/clients.controller');
const controllerPiercings = require('../controller/piercings.controller');
const controllerTattooArtists = require('../controller/tattooartists.controller');
const controllerTattoos = require('../controller/tattoos.controller');
const controllerUsers = require('../controller/users.controller');
const controllerViews = require('../controller/views.controller')

router.get('/landing', controllerViews.showLandingPage);
router.get('/formregister', controllerViews.showFormRegister);
router.get('/formlogin', controllerViews.showFormLogin);
router.get('/formadmin', controllerViews.showFormAdmin);
router.get('/tattoo', controllerViews.showFormTattoo);

// Booking
/**
 * @swagger
 * components:
 *  schemas:
 *      Booking:
 *          type: object
 *          properties:
 *              fechaCita:
 *                  type: date
 *              estado:
 *                  type: string
 *              idCliente:
 *                  type: string
 *              idTatuador:
 *                  type: string
 *              idPiercing:
 *                  type: string
 *              idTatuaje:
 *                  type: string
 *          required:
 *              - fechaCita
 *              - estado
 *              - idCliente
 *              - idTatuador
 *          example:
 *              fechaCita: 2023-11-02T12:30:00
 *              estado: activa
 *              idCliente: 65070c3b5dc80e4398f960a9
 *              idTatuador: 6518678fbd8dc7609a105f63
 *              idTatuaje: 4733749379739857345735
 */
// SHOW BOOKING
/**
 * @swagger
 * /api/v1/showbooking:
 *  get:
 *      summary: show dates
 *      tags: [Booking]
 *      responses:
 *          200:
 *              description: all bookings
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Booking'
 */
router.get('/showbooking', controllerBooking.showBookingController);
// CREATE BOOKING
/**
 * @swagger
 * /api/v1/newbooking:
 *  post:
 *      summary: create a new date
 *      tags: [Booking]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Booking'
 *      responses:
 *          200:
 *              description: new date created success
 */
router.post('/newbooking', controllerBooking.createBookingController);
// UPDATE BOOKING
/**
 * @swagger
 * /api/v1/updatebooking:
 *  put:
 *      summary: update a date
 *      tags: [Booking]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Booking'
 *      responses:
 *          200:
 *              description: date updated successfully
 *          404:
 *              description: booking not found
 */
router.put('/updatebooking', controllerBooking.updateBookingController);
// DELETE BOOKING
/**
 * @swagger
 * /api/v1/deletebooking:
 *  delete:
 *      summary: delete a date
 *      tags: [Booking]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  chema:
 *                      type: object
 *                      $ref: '#/components/schemas/Booking'
 *      responses:
 *          200:
 *              description: date deleted
 *          400:
 *              description: date not found
 */
router.delete('/deletebooking', controllerBooking.deleteBookingController);

// Clients
/**
 * @swagger
 * components:
 *  schemas:
 *      Clients:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *              apellido:
 *                  type: string
 *              celular:
 *                  type: string
 *              documento:
 *                  type: string
 *              correo:
 *                  type: string
 *              fechaNacimiento:
 *                  type: string
 *              alergias:
 *                  type: string
 *              idTatuaje:
 *                  type: string
 *              idPiercing:
 *                  type: string
 *              contrasena:
 *                  type: string
 *              fotoDocumento:
 *                  type: string
 *          required:
 *              - nombre
 *              - apellido
 *              - celular
 *              - documento
 *              - correo
 *              - fechaNacimiento
 *              - contrasena
 *              - fotoDocumento
 *          example:
 *              nombre: Laura
 *              apellido: Acosta
 *              celular: 3053792464
 *              documento: 1038262440
 *              correo: lacosta@gmail.com
 *              fechaNacimiento: 2004-21-12
 *              alergias: Ninguna
 *              idTatuaje: 1231432243423424
 *              idPiercing: 343648358353555
 *              contrasena: 12345678
 *              fotoDocumento: https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg
 */
// SHOW CLIENT
/**
 * @swagger
 * /api/v1/showclient:
 *  get:
 *      summary: show clients
 *      tags: [Clients]
 *      responses:
 *          200:
 *              description: all clients
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Clients'
 */
router.get('/showclient', controllerClients.showClientController);
// CREATE CLIENT
/**
 * @swagger
 * /api/v1/newclient:
 *  post:
 *      summary: create a new client
 *      tags: [Clients]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Clients'
 *      responses:
 *          200:
 *              description: new client created successfully
 */
router.post('/newclient', controllerClients.createClientController);
// UPDATE CLIENT
/**
 * @swagger
 * /api/v1/updateclient:
 *  put:
 *      summary: update a client
 *      tags: [Clients]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Clients'
 *      responses:
 *          200:
 *              description: client updated successfully
 *          404:
 *              description: client not found
 */
router.put('/updateclient', controllerClients.updateClientController);
// DELETE CLIENT
/**
 * @swagger
 * /api/v1/deleteclient:
 *  delete:
 *      summary: delete a client
 *      tags: [Clients]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  chema:
 *                      type: object
 *                      $ref: '#/components/schemas/Clients'
 *      responses:
 *          200:
 *              description: client deleted
 *          400:
 *              description: client not found
 */
router.delete('/deleteclient', controllerClients.deleteClientController);
router.post('/loginclient', controllerClients.loginClientController);


// Piercings
/**
 * @swagger
 * components:
 *  schemas:
 *      Piercings:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *              zona:
 *                  type: string
 *              imagen:
 *                  type: string
 *          required:
 *              - nombre
 *              - zona
 *              - imagen
 *          example:
 *              nombre: Septum
 *              zona: Septo de la nariz
 *              imagen: https://t1.uc.ltmcdn.com/es/posts/4/6/8/tipos_de_piercing_en_la_nariz_y_como_se_cuidan_51864_600.jpg
 */
// SHOW PIERCINGS
/**
 * @swagger
 * /api/v1/showpiercing:
 *  get:
 *      summary: show piercings
 *      tags: [Piercings]
 *      responses:
 *          200:
 *              description: all piercings
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Piercings'
 */
router.get('/showpiercing', controllerPiercings.showPiercingController);
// CREATE PIERCING
/**
 * @swagger
 * /api/v1/newpiercing:
 *  post:
 *      summary: create a new piercing
 *      tags: [Piercings]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Piercings'
 *      responses:
 *          200:
 *              description: new piercing created successfully
 */
router.post('/newpiercing', controllerPiercings.createPiercingController);
// UPDATE PIERCING
/**
 * @swagger
 * /api/v1/updatepiercing:
 *  put:
 *      summary: update a piercing
 *      tags: [Piercings]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Piercings'
 *      responses:
 *          200:
 *              description: piercing updated successfully
 *          404:
 *              description: piercing not found
 */
router.put('/updatepiercing', controllerPiercings.updatePiercingController);
// DELETE PIERCING
/**
 * @swagger
 * /api/v1/deletepiercing:
 *  delete:
 *      summary: delete a piercing
 *      tags: [Piercings]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  chema:
 *                      type: object
 *                      $ref: '#/components/schemas/Piercings'
 *      responses:
 *          200:
 *              description: piercing deleted
 *          400:
 *              description: piercing not found
 */
router.delete('/deletepiercing', controllerPiercings.deletePiercingController);

// Tattoos
/**
 * @swagger
 * components:
 *  schemas:
 *      Tattoos:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *              descripcion:
 *                  type: string
 *              tamano:
 *                  type: string
 *              color:
 *                  type: string
 *              tecnica:
 *                  type: string
 *              autor:
 *                  type: string
 *              imagen:
 *                  type: string
 *          required:
 *              - nombre
 *              - descripcion
 *              - tamano
 *              - color
 *              - tecnica
 *          example:
 *              nombre: Flores
 *              descripcion: flores realistas
 *              tamano: 23cm
 *              color: negro
 *              tecnica: realismo
 *              autor: Adrian Sangronis
 *              imagen: https://tropicantattoo.es/wp-content/uploads/2021/03/Tattoo-rosas-neotradicional-valencia-tropicantattoo.jpg
 */
// SHOW TATTOOS
/**
 * @swagger
 * /api/v1/showtattoo:
 *  get:
 *      summary: show tattoos
 *      tags: [Tattoos]
 *      responses:
 *          200:
 *              description: all tattoos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Tattoos'
 */
router.get('/showtattoo', controllerTattoos.showTattooController);
// CREATE TATTOO
/**
 * @swagger
 * /api/v1/newtattoo:
 *  post:
 *      summary: create a new tattoo
 *      tags: [Tattoos]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Tattoos'
 *      responses:
 *          200:
 *              description: new tattoo created successfully
 */
router.post('/newtattoo', controllerTattoos.createTattooController);
// UPDATE TATTOO
/**
 * @swagger
 * /api/v1/updatetattoo:
 *  put:
 *      summary: update a tattoo
 *      tags: [Tattoos]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Tattoos'
 *      responses:
 *          200:
 *              description: tattoo updated successfully
 *          404:
 *              description: tattoo not found
 */
router.put('/updatetattoo', controllerTattoos.updateTattooController);
// DELETE TATTOO
/**
 * @swagger
 * /api/v1/deletetattoo:
 *  delete:
 *      summary: delete a tattoo
 *      tags: [Tattoos]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  chema:
 *                      type: object
 *                      $ref: '#/components/schemas/Tattoos'
 *      responses:
 *          200:
 *              description: tattoo deleted
 *          400:
 *              description: tattoo not found
 */
router.delete('/deletetattoo', controllerTattoos.deleteTattooController);

// Users
/**
 * @swagger
 * components:
 *  schemas:
 *      Users:
 *          type: object
 *          properties:
 *              correo:
 *                  type: string
 *              contrasena:
 *                  type: string
 *              rol:
 *                  type: string
 *          required:
 *              - correo
 *              - contrasena
 *              - rol
 *          example:
 *              correo: asangronis@gmail.com
 *              contrasena: tatuajes
 *              rol: tatuador
 */
// SHOW USERS
/**
 * @swagger
 * /api/v1/showuser:
 *  get:
 *      summary: show users
 *      tags: [Users]
 *      responses:
 *          200:
 *              description: all users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Users'
 */
router.get('/showuser', controllerUsers.showUserController);
// CREATE USER
/**
 * @swagger
 * /api/v1/newuser:
 *  post:
 *      summary: create a new user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: new user created success
 */
router.post('/newuser', controllerUsers.createUserController);
// UPDATE USER
/**
 * @swagger
 * /api/v1/updateuser:
 *  put:
 *      summary: update a user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: user updated successfully
 *          404:
 *              description: user not found
 */
router.put('/updateuser', controllerUsers.updateUserController);
// DELETE USERS
/**
 * @swagger
 * /api/v1/deleteuser:
 *  delete:
 *      summary: delete a user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  chema:
 *                      type: object
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: user deleted
 *          400:
 *              description: user not found
 */
router.delete('/deleteuser', controllerUsers.deleteUserController);

// tattooartists
/**
 * @swagger
 * components:
 *  schemas:
 *      TattooArtists:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *              apellido:
 *                  type: string
 *              celular:
 *                  type: string
 *              documento:
 *                  type: string
 *              correo:
 *                  type: string
 *              contrasena:
 *                  type: string
 *          required:
 *              - nombre
 *              - apellido
 *              - celular
 *              - documento
 *              - correo
 *              - contrasena
 *          example:
 *              nombre: Adrian
 *              apellido: Sangronis
 *              celular: 3226547687
 *              documento: 76543456
 *              correo: asangronis@gmail.com
 *              contrasena: tatuajes
 */
// SHOW TATTOOARTISTS
/**
 * @swagger
 * /api/v1/showtattooartist:
 *  get:
 *      summary: show tattoo artists
 *      tags: [TattooArtists]
 *      responses:
 *          200:
 *              description: all tattoo artists
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/TattooArtists'
 */
router.get('/showtattooartist', controllerTattooArtists.showTattooArtistController);
// CREATE TATTOOARTIST
/**
 * @swagger
 * /api/v1/newtattooartist:
 *  post:
 *      summary: create a new tattoo artist
 *      tags: [TattooArtists]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/TattooArtists'
 *      responses:
 *          200:
 *              description: new tattoo artists created successfully
 */
router.post('/newtattooartist', controllerTattooArtists.createtattooArtistController);
// UPDATE TATTOOARTIST
/**
 * @swagger
 * /api/v1/updatetattooartist:
 *  put:
 *      summary: update a tattoo artist
 *      tags: [TattooArtists]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/TattooArtists'
 *      responses:
 *          200:
 *              description: tattoo artist updated successfully
 *          404:
 *              description: tattoo artist not found
 */
router.put('/updatetattoartist', controllerTattooArtists.updatetattooArtistController);
// DELETE TATTOOARTIST
/**
 * @swagger
 * /api/v1/deletetattooartist:
 *  delete:
 *      summary: delete a tattoo artist
 *      tags: [TattooArtists]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  chema:
 *                      type: object
 *                      $ref: '#/components/schemas/TattooArtists'
 *      responses:
 *          200:
 *              description: tattoo artist deleted
 *          400:
 *              description: tattoo artist not found
 */
router.delete('/deletetattoortist', controllerTattooArtists.deletetattooArtistController);
module.exports = router;
