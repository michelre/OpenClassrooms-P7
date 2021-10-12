// Imporation mysql
const myqsl = require('mysql2');

// Création de la connexion à la base de données MySQL
const db = mysql.connexion ({
    DATABASE: process.env.DATABASE,
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DIALECT: process.env.DIALECT
});

// Connexion à la base de données
db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL !")
});

module.exports = db;