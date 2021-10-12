const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../database');
const User = require('../models/user');

// Enregistrement de nouveaux utilisateurs
exports.signup = (req, res, next) => 
    // Hashage du mot de passe via Bcrypt (10 passages)
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User ({
                id: req.body.id,
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                password: hash
            });
            // Sauvegarde du nouvel utilisateur dans la base de données SQL
            db.query(`INSERT INTO utilisateur SET ?`), user, (error, result) => {
                if (error) {
                    console.log(error)
                    return res.status(400).json("erreur")
                } else {
                    return res.status(201).json({ message: 'Utilisateur créé !'})
                };
            }
        }) 