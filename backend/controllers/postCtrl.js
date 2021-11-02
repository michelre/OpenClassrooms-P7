// Importation du modèle de publications
const Post = require('../models/post')
// Importation de la fonction fs permettant de supprimer un fichier 
const fs = require('fs');
// Importation de la BDD
const db = require('../database'); 


// Création d'une nouvelle publication
exports.createPost = (req, res, next) => {
    // Contenu de la publication
    let media = null;
    /* date_ajout = `SELECT date_ajout (getdate(), 'd', 'fr-FR') as date`; */

        // Si la publication contient une image
        if (req.file && req.file.filename !== undefined) {
            // Paramètrage de l'url
            media = `/images/${req.file.filename}`;
        } 
        // Préparation de la requête SQL
        let sqlCreatePost = `INSERT INTO publications (utilisateur_id, message, media, date_ajout) VALUES ('${4}', '${req.body.message}', '${media}', NOW())`;
        console.log(req.body.message);
        console.log(media);
        
        // Envoi de la requête à la BDD
        db.query(sqlCreatePost, (error, publication) => {
            if (!error) {
                db.query(`SELECT publications.*, utilisateurs.nom, utilisateurs.prenom FROM publications JOIN utilisateurs ON publications.utilisateur_id = utilisateurs.id WHERE publications.id = LAST_INSERT_ID()`,(error, publication) => {
                    res.status(201).json(publication[0]); 
                })
                } else {
                    console.log(error);
                    res.status(400).json({ message: "Erreur lors de la création de la publication !" });
                }
            }); 
};


// Suppression d'une publication
exports.deletePost = (req, res, next) => {
    const id = req.params.id;
    // Recherche de la publication via son id avant suppression 
    db.query(`DELETE FROM publications WHERE id = ?`, id, (error, result) => {
        // Si la publication n'a pas été trouvée
        if (error) {
            return res.status(400).json({ error: 'Publication non trouvée' });
        }
        // Si l'id correspond, suppresion de la publication
        return res.status(204).end();
    });
};


// Récupération d'une publication
exports.getOnePost = (req, res, next) => {
    const id = req.params.id;
    db.query(`SELECT * FROM publications WHERE id = ?`, id, (error, result) => {
        // Si la publication n'a pas été trouvée
        if (error) {
            return res.status(400).json({ error: 'Publication non trouvée' });
        }
        // Si l'id correspond, affichage de la publication
        return res.status(200).json(result[0]);
    });
};


// Récupération de l'intégralité des publications  
exports.getAllPosts = (req, res, next) => {
    db.query(`SELECT publications.*, utilisateurs.nom, utilisateurs.prenom FROM publications JOIN utilisateurs ON publications.utilisateur_id = utilisateurs.id`, (error, result) => {
        // Si les publications n'ont pas été trouvées
        if (error) {
            return res.status(400).json({ error: 'Publications non trouvées' });
        }
        // Si les publications ont été trouvées, affichage de tous les posts
        return res.status(200).json(result);
    });
};



/* --------------------------------------------- FONCTION MODIFICATION PUBLICATION ---------------------------------------- */


// Modification d'une publication : Fonctionnel pour le message ET l'image MAIS empêche de faire soit l'un soit l'autre et présentant des erreurs
exports.updatePost = (req, res, next) => {
    let media = req.body.media;
    let message = req.body.message || '';
    // Si la publication contient une image
    if (req.file && req.file.filename !== undefined) {
        // Paramètrage de l'url
        media = `/images/${req.file.filename}`;
    } 

    db.query(`UPDATE publications SET message=?, media=? WHERE id = ?`, [message, media, req.params.id], (error, result) => {
        if (error) {
            return res.status(400).json({ error: "Le post n'a pas pu être modifié" })
        }
        return res.status(200).json(result);
    })
}