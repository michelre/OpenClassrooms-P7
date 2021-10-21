const express = require('express');  
const router = express.Router();
const commentCtrl = require('../controllers/commentCtrl');
/* const auth = require('../middleware/auth'); */

router.post('/', commentCtrl.addComment);           // Ajouter un commentaire
router.put('/:id', commentCtrl.updateComment);      // Modifier un commentaire
router.delete('/:id', commentCtrl.deleteComment);   // Supprimer un commentaire

module.exports = router;