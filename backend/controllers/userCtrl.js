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
            db.query(`INSERT INTO utilisateur (nom, prenom, email, password, image) VALUES ('${req.body.nom}', '${req.body.prenom}', '${req.body.email}', '${hash}', '')`, (error, result) => {
                console.log(result);
            if (error) {
                console.log(error)
                return res.status(400).json("Erreur, utilisateur non créé !")
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
    if (email && password) {
        db.query('SELECT * FROM utilisateur WHERE email= ?', email, (error, results, fields) => { 
            // Utilisation de bcrypt pour comparer le hashage du mot de passe
            if (results.length > 0) {
                bcrypt.compare(password, results[0].password).then((valid) => {
                // Si le mot de passe ne correspond pas, envoi d'un message d'erreur
                    if (!valid) {
                    res.status(401).json({ message: 'Mot de passe incorrect' })
                    // Si le mot de passe correspond :
                    } else {
                    console.log(email, "s'est connecté")
                    let status = ''
                    console.log(results);
                    // Vérification du niveau d'accès de l'utilisateur afin de lui attribuer le statut d'admin ou de membre
                        if (results[0].niveau_acces === 1) {
                            status = 'admin'
                        } else {
                            status = 'membre'
                        }
                        // Attribution d'un token d'identification d'une durée de 24h
                        res.status(200).json({
                            userId: results[0].id,
                            email: results[0].email,
                            status: status,
                            token: jwt.sign({ userId: results[0].id, status: status },process.env.JWT_SECRET_TOKEN,{ expiresIn: '24h' })
                        })
                    }
                })
            } 
            // Si l'utilisateur ou le mot de passe n'ont pas été trouvés, envoi d'un message d'erreur
            else {
                res.status(401).json({ message: 'Utilisateur ou mot de passe inconnu' })
            }
        })
    } else {  
        res.status(500).json({ message: "Entrez votre email et votre mot de passe" })
    }
}   

   
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


