// Importation du package dotenv sécurisant les informations sensibles liées à la BDD
require('dotenv').config();

// Importations
const express = require('express'); // permet de déployer rapidement l'API       
const helmet = require('helmet'); // sécurise notre application Express en application des en-têtes HTTP diverses
const bodyParser = require('body-parser'); // middleware express lisant l'entrée d'un formulaire, le stockant en tant qu'objet JavaScript accessible via req.body
const apiLimiter = require('./middleware/limits-rate'); // middleware limitant les demandes infructueuses répétées à l'API
const path = require('path'); // module donnant accès au chemin du système de fichiers
const userRoutes = require('./routes/userRoutes');        // route user
const postRoutes = require('./routes/postRoutes');        // route post
const likeRoutes = require('./routes/likeRoutes');        // route like
const commentRoutes = require('./routes/commentRoutes');  // route comment 
 
// Création de l'application Express, sécurisée par le package Helmet via la définition d'en-têtes HTTP diverses
const app = express(); 
app.use(helmet());

// Ajout des headers permettant le Cross Origin Resource Sharing (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Accès autorisé pour tous
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // Accès autorisé sous certains en-têtes
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Accès autorisé sous certaines méthodes
    next();
  });

// Traitement des données via bodyParser rendant celles-ci exploitables
app.use(bodyParser.json()); 

// Définition des différentes routes
app.use('/api/users', apiLimiter, userRoutes);  // Routes utilisateur
app.use('/api/posts', postRoutes);              // Routes publications
app.use('/api/likes', likeRoutes);              // Routes likes
app.use('/api/comments', commentRoutes);        // Routes commentaires

// Routes images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Exportation de l'application
module.exports = app;