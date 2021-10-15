const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../database');
const User = require('../models/user');

// Enregistrement de nouveaux utilisateurs
exports.signup = (req, res, next) => {
    // Hashage du mot de passe via Bcrypt (10 passages)
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            console.log(hash, db);
            // Sauvegarde du nouvel utilisateur dans la base de données SQL
            db.query(`INSERT INTO 'utilisateur' (nom, prenom, email, password, image) VALUES ('${req.body.nom}', '${req.body.prenom}', '${req.body.email}', '${hash}', '')`, (error, result) => {
                console.log(result);
            if (error) {
                console.log(error)
                return res.status(400).json("erreur")
            } else {
                return res.status(201).json({ message: 'Utilisateur créé !'})
            };
        })
    })
} 
    
// Connexion d'utilisateurs existants
exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    // Recherche de l'utilisateur via son mail
    db.query(`SELECT 'email' FROM utilisateur`), email, (error, result) => {
        // Si l'utilisateur n'a pas été trouvé, envoi d'un message d'erreur
        if (result === "" || result === undefined) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !'});
        }
        // Utilisation de bcrypt pour comparer le hashage du mot de passe
        bcrypt.compare(password, result[0].password).then((valid) => {
            // Si le mot de passe ne correspond pas, envoi d'un message d'erreur
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !'});
            }
            const id = result[0].id_utilisateur;
            // Si le mot de passe correspond, attribution d'un token d'identification d'une durée de 24h
            const token = jwt.sign(
                { userId: id },
                'JWT_SECRET_TOKEN',
                { expiresIn: '24h'}
            )
            res.status(200)({ token, userId: id });
        });
    }
};

// Suppression d'un compte 
exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    // Recherche de l'utilisateur via son mail avant suppresion
    db.query(`DELETE 'id_utilisateur' FROM utilisateur`, id, (error, result) => {
        // Si l'utilisateur n'a pas été trouvé
        if (error) {
            return res.status(400).json({ error: 'Utilisateur non trouvé'}); 
        }
        // Si le mail correspond, suppresion du compte
        return res.status(200).json(result);
    });
};
