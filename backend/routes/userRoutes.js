const express = require('express'); 
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const verifyPassword = require('../middleware/verifyPassword');
/* const auth = require('../middleware/auth'); */

router.post('/signup', verifyPassword, userCtrl.signup);          // Inscription
router.post('/login', userCtrl.login);                            // Connexion 
router.put('/:id', userCtrl.updateUser);                          // Modifier un compte
router.delete('/:id', userCtrl.deleteUser);                       // Supprimer un compte
router.get('/:id', userCtrl.getOneUser);                          // Récupérer un utilisateur 
router.get('/', userCtrl.getAllUsers);                            // Récupérer la liste de tous les utilisateurs

module.exports = router;