// Importation du modèle de publications 
const Comment = require('../models/comment');
// Importation de la BDD
const db = require('../database');


// Ajout d'un nouveau commentaire
exports.addComment = (req, res, next) => {
    // Préparation de la requête SQL
    let sqlCreateComment = `INSERT INTO commentaires (utilisateur_id, publication_id, message, date_ajout) VALUES ('${4}', '${req.body.postId}, '${req.body.message}', NOW())`;
    // Envoi de la requête à la BDD
    db.query(sqlCreateComment, (error, publication) => {
        if (!error) {
            res.status(201).json({ message: "Commentaire ajouté !" });
        } else {
            console.log(error);
            res.status(400).json({ message: "Erreur lors de l'ajout du commentaire !" });
        }
    }); 
}

// Modification d'un commentaire
exports.updateComment = (req, res, next) => {
    db.query(`UPDATE commentaires SET message = ? WHERE id = ?`, [req.body.message, req.params.id], (error, result) => {
        if (error) {
            return res.status(400).json({ error: "Le commentaire n'a pas pu être modifié" })
        }
        return res.status(200).json(result);
    })
}

// Suppression d'un commentaire
exports.deleteComment = (req, res, next) => {
    const id = req.params.id;
    // Recherche du commentaire via son id avant suppression
    db.query(`DELETE FROM commentaires WHERE id = ?`, id, (error, result) => {
        // Si le commentaire n'a pas été trouvé
        if (error) {
            return res.status(400).json({ error: 'Commentaire non trouvé' });
        }
        // Si l'id correspond, suppression du commentaire
        return res.status(204).end();
    });
};

// QUESTION : Récupérer l'intégralité des commentaires publication par publication vis leurs id ? rename getAllCommentsByPost

// Récupération de l'intégralité des commentaires
exports.getAllComments = (req, res, next) => {
    const idPost = req.params.publication_id;
    db.query(`SELECT * FROM commentaires WHERE id = ?`, id, (error, result) => {
        // Si les commentaires n'ont pas été trouvés
        if (error) {
            return res.status(400).json({ error: 'Commentaires non trouvés'});
        }
        // Si les commentaires ont été trouvés, affichage de tous les commentaires
        return res.status(200).json(result);
    });
};