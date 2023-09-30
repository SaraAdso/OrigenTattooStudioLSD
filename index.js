const express = require('express');
const app = express();
const routes = require('./backend/routes/routes');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/', routes);

app.listen(process.env.PORT, () => {
  console.log('funciona');
});
