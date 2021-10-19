const express = require('express'); 
const router = express.Router();
const likeCtrl = require('../controllers/likeCtrl');
const auth = require('../middleware/auth');

router.post('/:id/wall', auth, likeCtrl.addLike);

module.exports = router;