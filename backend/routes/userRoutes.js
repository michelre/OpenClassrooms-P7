const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middleware/auth');
const verifyPassword = require('../middleware/verifyPassword');

router.post('/signup', verifyPassword, userCtrl.signup);    // Inscription
router.post('/login', userCtrl.login);                      // Connexion 
router.delete('/:id', auth, userCtrl.deleteUser)            // Suppression de compte


module.exports = router;