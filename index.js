const express = require('express');
const app = express();
const routes = require('./backend/routes/routes');
require('dotenv').config();
// swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NodeJS MongoDB API',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`
      }
    ]
  },
  apis: [`${path.join(__dirname, '/backend/routes/routes.js')}`]
}
const swaggerDoc = require('./swagger.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/frontend/views/pages'))
app.use(express.static(path.join(__dirname, '/frontend/static')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`funciona en el puerto ${process.env.PORT}`);
});
