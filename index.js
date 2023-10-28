const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const {appendFile, rename} = require('fs/promises'); // Importa fs/promises
const fs = require('fs'); // Importa fs

const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Define la ruta al archivo JSON de definición de OpenAPI
const swaggerDocument = require('./openapi.json'); // Asegúrate de que el nombre del archivo sea correcto

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Directorio de destino para el archivo .txt
const destinationFolder = path.join(__dirname, '/backend/files/logs');

async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, {flag: 'w'});
    console.log(`Appended data to ${fileName}`);

    // Mueve el archivo a la carpeta de destino
    const destinationPath = path.join(destinationFolder, fileName);
    await rename(fileName, destinationPath);
    console.log(`Moved ${fileName} to ${destinationPath}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: ${error.message}`);
  }
}

// Asegúrate de que la carpeta de destino exista
if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder, {recursive: true});
}

appendToFile('activities.txt', 'Archivo Importante ');

// Inicia el servidor
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log('La aplicación está funcionando en el puerto ' + port);
});
