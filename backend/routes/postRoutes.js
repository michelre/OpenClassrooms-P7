const express = require('express');  
const router = express.Router();
const postCtrl = require('../controllers/postCtrl');
const multer = require('../middleware/multer-config');
/* const auth = require('../middleware/auth'); */

router.post('/', multer, postCtrl.createPost);     // Création d'un nouveau post
router.put('/:id', multer, postCtrl.updatePost);   // Modification d'un post
router.delete('/:id', postCtrl.deletePost);        // Supprimer un post
router.get('/:id', postCtrl.getOnePost);           // Récupérer un post
router.get('/', postCtrl.getAllPosts);             // Récupérer l'intégralité des posts

module.exports = router;