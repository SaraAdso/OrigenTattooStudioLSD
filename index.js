const express = require('express');
const app = express();
const routes = require('./backend/routes/routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', routes);

app.listen(7000, () => {
    console.log('funciona');
});
