// Importation du modèle de publications
const Post = require('../models/post')
// Importation de la fonction fs permettant de supprimer un fichier 
const fs = require('fs');
// Importation de la BDD
const db = require('../database');


// Création d'une nouvelle publication
exports.createPost = (req, res, next) => {
    // Contenu de la publication
    const contenu = req.body.contenu;

    // Si la publication contient une image
    if (contenu !== undefined) {
        // Paramètrage de l'url
        contenu = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
        // Préparation de la requête SQL
        let sqlCreatePost = `INSERT INTO publications (utilisateur_id, message, contenu, date_ajout) VALUES ('${req.body.utilisateur_id}', '${req.body.message}', '${req.body.contenu}', '${req.body.date_ajout}')`;
        // Envoi de la requête à la BDD
        db.query(sqlCreatePost, (error, publication) => {
            if (!error) {
                res.status(201).json({ message: "Publication enregistrée !" });
            } else {
                res.status(400).json({ message: "Erreur lors de la création de la publication !" });
            }
        }); 
        
    // Si la publication ne contient pas d'image
    } else {
        contenu = ""; 
        // Préparation de la requête SQL
        let sqlCreatePost = `INSERT INTO publications (utilisateur_id, message, contenu, date_ajout) VALUES ('${req.body.utilisateur_id}', '${req.body.message}', '${req.body.contenu}', '${req.body.date_ajout}')`;
        // Envoi de la requête à la BDD
        db.query(sqlCreatePost, (error, publication) => {
            if (!error) {
                res.status(201).json({ message: "Publication enregistrée !" });
            } else {
                res.status(400).json({ message: "Erreur lors de la création de la publication !" });
            }
        }); 
    }
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