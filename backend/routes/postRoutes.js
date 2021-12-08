const express = require('express');  
const router = express.Router();
const postCtrl = require('../controllers/postCtrl');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth'); 

router.post('/', auth, multer, postCtrl.createPost);     // Créer un nouveau post 
router.put('/:id', auth, multer, postCtrl.updatePost);   // Modifier un post 
router.delete('/:id', auth, postCtrl.deletePost);        // Supprimer un post 
router.get('/:id', auth, postCtrl.getOnePost);           // Récupérer un post 
router.get('/', auth, postCtrl.getAllPosts);             // Récupérer l'intégralité des posts 

module.exports = router;