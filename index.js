const express = require('express');
const app = express();
const routes = require('./backend/routes/routes');
const path = require('path');

// swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Othalan - Origen Tattoo',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:7000',
      },
    ],
  },
  apis: [`${path.join(__dirname, './backend/routes/routes.js')}`],
};

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.use('/api/v1/', routes);


app.listen(process.env.PORT, () => {
  console.log('funciona');
});
