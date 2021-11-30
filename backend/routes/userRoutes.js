const express = require('express'); 
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const verifyPassword = require('../middleware/verifyPassword');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth'); 

router.post('/signup', verifyPassword, userCtrl.signup);          // Inscription
router.post('/login', userCtrl.login);                            // Connexion 
router.put('/:id', auth, userCtrl.updateUser);                     // Modifier un compte 
router.post('/:id/image', auth, multer, userCtrl.updateUserImage);      // Modifier l'image de profil (ajouter auth)
router.delete('/:id', auth, userCtrl.deleteUser);                       // Supprimer un compte (ajouter auth)
router.get('/:id', auth, userCtrl.getOneUser);                          // Récupérer un utilisateur (ajouter auth)
router.get('/', auth, userCtrl.getAllUsers);                            // Récupérer la liste de tous les utilisateurs (ajouter auth)

module.exports = router;