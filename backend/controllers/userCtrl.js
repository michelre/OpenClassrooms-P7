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
            db.query(`INSERT INTO utilisateurs (nom, prenom, email, password, image) VALUES ('${req.body.nom}', '${req.body.prenom}', '${req.body.email}', '${hash}', '')`, (error, result) => {
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
        db.query('SELECT * FROM utilisateurs WHERE email= ?', email, (error, results, fields) => { 
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
        res.status(400).json({ message: "Entrez votre email et votre mot de passe" })
    }
}   


// Suppression d'un compte 
exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    // Recherche de l'utilisateur via son id avant suppresion
    db.query(`DELETE FROM utilisateurs WHERE id = ?`, id, (error, result) => {
        // Si l'utilisateur n'a pas été trouvé
        if (error) {
            return res.status(400).json({ error: 'Utilisateur non trouvé'}); 
        }
        // Si l'id correspond, suppresion du compte
        return res.status(204).end();
    });
};


// Sélectionner un utilisateur
exports.getOneUser = (req, res, next) => {
    const id = req.params.id;
    db.query(`SELECT * FROM utilisateurs WHERE id = ?`, id, (error, result) => {
        // Si l'utilisateur n'a pas été trouvé
        if (error) {
            return res.status(400).json({ error: 'Utilisateur non trouvé'}); 
        }
        // Si l'id correspond, affichage du compte
        return res.status(200).json(result[0]);
    });
};


// Afficher tous les comptes
exports.getAllUsers = (req, res, next) => {
    db.query(`SELECT * FROM utilisateurs`, (error, result) => {
        // Si les utilisateurs n'ont pas été trouvés
        if (error) {
            return res.status(400).json({ error: 'Utilisateur non trouvé'}); 
        }
        // Si les utilisateurs ont été trouvés, affichage de tous les comptes
        return res.status(200).json(result);
    });
};

/* --------------------------------------------- FONCTION MODIFICATION DE PROFIL ---------------------------------------- */


/*
// Modifier un compte : Premier Try NON FONCTIONNEL
exports.updateUser = (req, res, next) => {
    const id = req.params.id;
    const nom = req.params.nom;
    db.query(`UPDATE utilisateurs SET (nom) = '${nom}' WHERE id = 1`, (error, result) => {
        if (error) {
            return res.status(400).json({ error: 'Utilisateur non trouvé ! '}); 
        }
        // Si les utilisateurs ont été trouvés, affichage de tous les comptes
        return res.status(200).json(result);
    });
}
*/


/*
// Modifier un compte : Second Try, FONCTIONNEL AVEC ERREURS
exports.updateUser = (req, res, next) => {
    const id = req.params.id;
    const nom = req.params.nom;
    var changeName = `UPDATE utilisateurs SET nom = '${nom}' WHERE id =`+id;
    var showName = `SELECT * FROM utilisateurs WHERE id=`+id;

    db.query(showName, function(err, result) {
        if (err) {
            throw err;
        } else {
            db.query(changeName, function(err, result) {
                if (err) {
                    throw err;
                } else {
                    console.log(result)
                    res.status(200).json(result);
                }
            })
        }
    })
}
*/


/*
// Modifier un compte : 3e try reprise totale NON FONCTIONNELLE
exports.updateUser = (req, res, next) => {
    // Check si l'utilisation à modifier existe via la vérification de son id
    if (req.params.id) {
        db.query('SELECT * FROM utilisateurs WHERE id = ?', [req.params.id], function (err, result) {
            if (err) return res.status(500).json({ error: err })
            if (result.length === 0) {
                return res.status(404).json({ error: 'Profil inconnu' })
            // Check si l'email de l'utilisateur séléctionné n'existe pas déjà 
            } else {
                db.query(`SELECT email, id FROM utilisateurs WHERE email = ?`, [req.body.email], function (problem, result) {
                    if (problem) return res.status(500).json({ error: problem });
                    if ((result[0] !== undefined || result === []) && req.params.id != result[0].id) {
                        return res.status(500).json({ message: 'Email déjà utilisé' })
                    }
                    // Vérification du mot de passe via le hash utilisateur
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        const time = new Date();
                        // Modification des champs nom et prénom sans maj de l'email
                        if (req.body.email === null) {
                            db.query(`UPDATE utilisateurs SET nom=?, prenom=?, password=? WHERE id=${req.params.id}`, [req.body.nom, req.body.prenom, hash, time], function (err, sucess) {
                                if (err) return res.status(500).json({ error: err });
                                return res.status(200).json({ message: 'Profil mis à jour avec succès !' })
                            })
                        // Modification des champs nom prénom ET email
                        } else {
                            db.query(`UPDATE utilisateurs SET nom=?, prenom=?, email=?, password=? WHERE id=${req.params.id}`, [req.body.nom, req.body.prenom, req.body.email, hash, time],
                            function (err, success) {
                                if (err) return res.status(500).json({ error: err});
                                return res.status(200).json({ message: 'Profil mis à jour avec succès !' })
                            })
                        }
                    })
                })
            }
        })
    }
}
*/


// Modifier un compte, 4e try reprise totale
exports.updateUser = (req, res, next) => {
    db.query(`UPDATE utilisateurs SET nom = ? WHERE id = ?`, [req.body.nom, req.params.id], (error, result) => {
        if (error) {
            return res.status(400).json({ error: "Le compte n'a pas pu être modifié" })
        }
        return res.status(200).json(result);
    })
}