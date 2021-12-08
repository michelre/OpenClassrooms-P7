// Importation du package password-validator en charge de la création d'un password robuste
const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    // Vérification du respect du schéma password
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message : "! Mot de passe incorrect, veuillez respecter le schéma suivant : 8 caractères minimum, 1 majuscule, 2 chiffres !"});
        return;
    } 
    // Vérification de l'exactitude des deux mots de passe 
    if (req.body.password != req.body.passwordConfirm){
        res.status(400).json({ message : "! Veuillez utiliser deux mots passe identiques !"});
        return;
    }   
    next();
};

