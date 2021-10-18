const mysql = require('mysql2');

const Post = function (post) {
    this.id = post.id;
    this.utilisateur_id = post.utilisateur_id;
    this.message = post.message;
    this.contenu = post.contenu;
    this.date_ajout = post.date_ajout;
    this.date_modification = post.date_modification;
};

module.exports = Post;