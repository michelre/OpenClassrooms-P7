const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middleware/auth');
const verifyPassword = require('../middleware/verifyPassword');

router.post('/signup', verifyPassword, userCtrl.signup);          // Inscription
router.post('/login', userCtrl.login);                            // Connexion 
router.put('/:id/profil', userCtrl.updateUser);                   // Modifier un compte
router.delete('/:id/profil', auth, userCtrl.deleteUser);          // Supprimer un compte
router.get('/:id/community', auth, userCtrl.getOneUser);          // Récupérer un utilisateur 
router.get('/:id/community', auth, userCtrl.getAllUsers);         // Récupérer la liste de tous les utilisateurs

module.exports = router;