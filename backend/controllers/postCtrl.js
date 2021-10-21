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

        // Si la publication contient une image
        if (req.file.filename !== undefined) {
            // Paramètrage de l'url
            media = `/images/${req.file.filename}`;
        } 
        // Préparation de la requête SQL
        let sqlCreatePost = `INSERT INTO publications (utilisateur_id, message, media, date_ajout) VALUES ('${1}', '${req.body.message}', '${media}', NOW())`;
        console.log(req.body.message);
        console.log(media);
        
        // Envoi de la requête à la BDD
        db.query(sqlCreatePost, (error, publication) => {
            if (!error) {
                res.status(201).json({ message: "Publication enregistrée !" });
            } else {
                console.log(error);
                res.status(400).json({ message: "Erreur lors de la création de la publication !" });
            }
        }); 
};


// Modification d'une publication
exports.updatePost = (req, res, next) => {

}

// Suppression d'une publication
exports.deletePost = (req, res, next) => {
    
}

// Récupération d'une publication
exports.getOnePost = (req, res, next) => {

}

// Récupération de l'intégralité des publications 
exports.getAllPosts = (req, res, next) => {

}