// Importation du modèle de publications
const Post = require('../models/post')
// Importation de la fonction fs permettant de supprimer un fichier 
const fs = require('fs');
// Importation de la BDD
const db = require('../database'); 


// Création d'une nouvelle publication
exports.createPost = (req, res, next) => {
    // Vérification post
    if (!req.body.message){
        res.status(400).json({ message: "Erreur lors de la création de la publication !" });
        return
    }
    // Contenu de la publication
    let media = null;
        // Si la publication contient une image
        if (req.file && req.file.filename !== undefined) {
            // Paramètrage de l'url
            media = `/images/${req.file.filename}`;
        } 
        // Préparation de la requête SQL
        let sqlCreatePost = `INSERT INTO publications (utilisateur_id, message, media, link, date_ajout) VALUES ('${req.userId}', '${req.body.message}', '${media}', '${req.body.link}', NOW())`;
        // Envoi de la requête à la BDD en vérifiant le statut de l'utilisateur et maj de l'odre des posts
        db.query(sqlCreatePost, (error, publication) => {
            if (!error) {
                db.query(`SELECT publications.*, utilisateurs.nom, utilisateurs.prenom,
                IF(publications.utilisateur_id = ${req.userId} OR "${req.status}" = "admin", 1, 0) AS editable 
                FROM publications JOIN utilisateurs ON publications.utilisateur_id = utilisateurs.id WHERE publications.id = LAST_INSERT_ID()`,(error, publication) => {
                    res.status(201).json(publication[0]); 
                })
                } else {
                    res.status(400).json({ message: "Erreur lors de la création de la publication !" });
                }
            }); 
};

// Modification d'une publication 
exports.updatePost = (req, res, next) => {
    let media = req.body.media;
    let message = req.body.message || '';
    let link = req.body.link || '';
    // Si la publication contient une image
    if (req.file && req.file.filename !== undefined) {
        // Paramètrage de l'url
        media = `/images/${req.file.filename}`;
    } 
    // Mise à jour de la publication 
    db.query(`UPDATE publications SET message=?, media=?, link=? WHERE id = ?`, [message, media, link,req.params.id], (error, result) => {
        if (error) {
            return res.status(400).json({ error: "Le post n'a pas pu être modifié" })
        }
        return res.status(200).json(result);
    })
};

// Suppression d'une publication
exports.deletePost = (req, res, next) => {
    const id = req.params.id;
    // Supprimer l'image si elle existe du post (delete dans le dossier images)
    db.query(`SELECT media FROM publications WHERE id = ${id}`, (error, result) => {
        if (result.length && result[0].media) {
            fs.unlink(__dirname + '/../' +result[0].media, () => {})
        }
    });
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
    db.query(`SELECT * FROM publications INNER JOIN utilisateurs ON utilisateurs.id = publications.utilisateur_id WHERE publications.id = ?`, id, (error, result) => {
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
    console.log(req.status);
    db.query(`SELECT publications.*, utilisateurs.nom, utilisateurs.prenom, utilisateurs.image,
    (SELECT COUNT(*) FROM likes WHERE publication_id = publications.id) AS likes,
    IF(publications.utilisateur_id = ${req.userId} OR "${req.status}" = "admin", 1, 0) AS editable
    FROM publications JOIN utilisateurs ON publications.utilisateur_id = utilisateurs.id
    ORDER BY date_ajout desc`, (error, result) => {
        // Si les publications n'ont pas été trouvées
        if (error) {
            return res.status(400).json({ error: 'Publications non trouvées' });
        }
        // Si les publications ont été trouvées, affichage de tous les posts
        return res.status(200).json(result);
    });
};



