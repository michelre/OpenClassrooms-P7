const express = require('express');

const app = express();

// Ajout des headers permettant le Cross Origin Resource Sharing (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Accès autorisé pour tous
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // Accès autorisé sous certains en-têtes
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Accès autorisé sous certaines méthodes
    next();
  });

// Traitement des données via bodyParser rendant celles-ci exploitables
app.use(bodyParser.json());



module.exports = app;