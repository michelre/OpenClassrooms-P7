const express = require('express');   
const router = express.Router();
const commentCtrl = require('../controllers/commentCtrl');
/* const auth = require('../middleware/auth'); */

router.post('/', commentCtrl.addComment);           // Ajouter un commentaire
router.delete('/:id', commentCtrl.deleteComment);   // Supprimer un commentaire
router.get('/:postId', commentCtrl.getPostComments);// Charger les commentaires d'un post

module.exports = router;