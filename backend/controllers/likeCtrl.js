// Importation du modèle de likes
const Like = require('../models/like');
// Imporatiton de la BDD
const db = require('../database');


// INITIALISATION, A REVOIR ENTIEREMENT POUR PRENDRE EN COMPTE LA LIMITATION D'UN LIKE PAR UTILISATEUR


// Ajout d'un like
exports.addLike = (req, res) => {
    // Préparation de la requête SQL 
    let sqlCreateLike = `INSERT INTO likes (utilisateur_id, publication_id) VALUES ('${1}', '${req.body.postId}')`;
    // Envoi de la requête à la BDD
    db.query(sqlCreateLike, (error, publication) => {
        if (!error) {
            res.status(201).json({ message: "Like ajouté !" });
        } else {
            let sqlDeleteLike = `DELETE FROM likes WHERE utilisateur_id = ${1} AND publication_id = ${req.body.postId}`;
            db.query(sqlDeleteLike, (errorDelete, publication) => {
                if (!errorDelete) {
                    res.status(204).end();
                    return;
                }
                res.status(400).json({ message: "Erreur lors de l'ajout du like !" });
            })
        }
    }); 
}



