const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/postCtrl');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/addPost', auth, multer, postCtrl.createPost);     // Création d'un nouveau post
router.put('/:id/wall', auth, multer, postCtrl.updatePost);     // Modification d'un post
router.delete('/:id/wall', auth, postCtrl.deletePost);          // Supprimer un post
router.get('/:id/wall', auth, postCtrl.getOnePost);             // Récupérer un post
router.get('/:id/wall', auth, postCtrl.getAllPosts);            // Récupérer l'intégralité des posts

module.exports = router;