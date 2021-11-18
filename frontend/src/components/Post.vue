 <template>
    <section class="wall-card">

        <!-- En-tête du post avec la photo de profil de l'auteur, son nom/prénom et la date d'ajout du post -->
        <div class="post-card-header">
            <a href="/profil" class="post-header-pic"> 
                <img src="../assets/witchKing.jpeg" width="50" class="post-header-pic-round">
            </a>
            <div class="post-header-name-date">
                <div class="post-header-name">
                    <p>{{post.nom}} {{post.prenom}}<br></p>
                </div>
                <div class="post-header-date">
                    <p>{{ datePost(post.date_ajout) }}</p>
                </div>
            </div>

            <!-- Bouton dropdown permettant de modifier/supprimer le post -->
            <div class="dropdown">
                <button 
                    @click="menuActive = !menuActive" 
                    v-click-outside="clickOutside" 
                    class="dropdown-btn"
                    title="Options"
                >
                    <i class="fas fa-ellipsis-v"></i>
                </button>
                <div v-if="menuActive" id="myDropdown" class="dropdown-content">
                                        <!-- TEST MODIFICATION - SUPPRESSION PUBLICATION 
                                            Authentification : v-if="statut === 'admin' || post.id_user === userId"
                                        -->
                    <button id="post-modify"
                            title="Modifier la publication"
                            @click="updatePost(post.id)">
                        <i class="far fa-edit"></i>
                        <span class="dropdown-options">Modifier</span>
                    </button>
                    <button id="post-delete"
                            title="Supprimer la publication"
                            @click="deletePost(post.id)">
                        <i class="far fa-trash-alt"></i>
                        <span class="dropdown-options">Supprimer</span>
                    </button>

                </div>
            </div>
        </div>

        <!-- Corps du post avec le message, l'image, et le nombre de likes -->
        <div class="post-content">
            <div class="post-description">
                <p class="post-txt">{{post.message}}</p>
            </div>
            <div class="post-img">
                <img :src="`http://localhost:3000${post.media}`" class="wall-img">
            </div>
            <div class="post-likes">
                <img src="../assets/pouce.png" class="wall-likes">
                <p>{{post.likes}}</p>
            </div>
        </div>

        <hr class="card-sep">

        <!-- Boutons permettant de liker/commenter le post -->
        <div class="post-actions">
            <div class="post-action-like" @click="addLike(post.id)">
                <i class="far fa-thumbs-up" id="icon-like"></i>
                <span class="like-txt">J'aime</span>
            </div>
            <div class="post-action-comment" @click="showComment(post.id)">
                <i class="far fa-comment-alt" id="icon-comment"></i>
                <span class="comment-txt">Commentaires</span>
            </div>
        </div>

        <hr class="card-sep">

        <!-- Partie réservée aux commentaires regroupant l'auteur et sa photo -->
        <div class="comment" v-if="reveleComment">
            <div class="comment-auth" :key="commentaire.id" v-for="commentaire in commentaires">
                <img src="../assets/merry.jpg" width="40" class="comment-pic-round">
                <div class="comment-user"> 
                    <span class="comment-user-name">Merry</span> 
                    <p class="comment-text">{{commentaire.message}}</p>
                </div>
                <!-- Menu dropdown permettant de supprimer un commentaire -->
                <div class="dropdown-comments">
                    <button 
                        @click="menuActiveComments = !menuActiveComments" 
                        v-click-outside-comments="clickOutsideComments" 
                        class="dropdown-btn-comments"
                        title="Option"
                    >
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div v-if="menuActiveComments" id="myDropdownComments" class="dropdown-content-comments">
                        <button id="comment-delete"
                                title="Supprimer le commentaire"
                                @click="deleteComment(post.id, commentaire.id)"
                                >
                            <i class="far fa-trash-alt"></i>
                            <span class="dropdown-options-comments">Supprimer</span>
                        </button>
                    </div>
                </div>
            </div>

        <!-- Ecriture du commentaire -->
            <form class="comment-input" @submit.prevent="addComment(post.id, commentData.message)">
                <input type="text"
                    class="com-input" 
                    v-model="commentData.message"
                    placeholder="Écrivez un commentaire ici..."
                >
            </form>
        
        </div>

    </section>
</template>


<script>

    export default {
        name: 'Post',
        props: {
            post: Object,
            deletePost: Function,
            addLike: Function,
            addComment: Function,
            loadComments: Function,
            commentaires: Array,
            deleteComment: Function
        },
        data() {
            return {
                menuActive: false,
                menuActiveComments: false,
                scTimer: 0,
                scY: 0,
                commentData: {
                    message: ''
                },
                reveleComment: false
            }
        },
        mounted() {
            console.log(this.commentaires);
        },
        methods: {
            clickOutside() {
                this.menuActive = false
            },
            clickOutsideComments() {
                this.menuActiveComments = false 
            },
            datePost(date){
                const event = new Date(date);
                const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            return event.toLocaleDateString('fr-Fr', options);
            },
            updatePost() {
                this.$router.push({ name:'ModifyPost', params:{id:this.post.id} });
            },
            // Bouton permettant d'afficher la partie commentaires
            showComment(postId) {
                this.reveleComment = true;
                this.loadComments(postId)
            },


        }
    }

</script>


<style scoped>
    
    .wall-card {
        width: 50%;
        margin: auto;
        padding: 1% 2% 1% 2%;
        background: #f1f1f1;
        border-radius: 2px;
        box-shadow: 0 0 20px #000000b3;
        box-sizing: border-box;
        margin-bottom: 3%;
    }

    .post-card-header {
        display: flex;
        align-items: center;
    }

    .post-header-pic-round {
        border-radius: 50% !important;
        height: 50px;
        width: 50px
    }

    .post-header-name-date {
        margin-left: 5%;
    }

    .post-header-name {
        font-size: 1.1em;
        font-weight: bold;
    }

    .post-header-date {
        color:gray;
    }

    .post-content {
        margin: auto;
    }

    .wall-img {
        width: 100%;
    }

    .post-likes {
        display: flex;
        align-items: center;
        margin-left: 5%;
    }

    .post-likes img {
        width: 5%;
        height: 5%;
        margin-right: 1%;
    }

    .card-sep {
        color: rgb(30, 51, 121);
    }

    .post-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #icon-like, #icon-comment {
        transition: transform .2s;
    }

    #icon-like:hover, #icon-comment:hover {
        transform: scale(1.3);
    }

    .post-action-like {
        margin-left: 20%;
        display: flex;
    }

    .post-action-comment {
        margin-right: 20%;
        display: flex;
    }

    .post-action-like, .post-action-comment {
        width: 20%;
    }

    .like-txt, .comment-txt {
        margin-left: 10%;
    }

    .comment-auth {
        display: flex;
        flex-direction: row;
        margin-top: 3%;
        margin-bottom: 1%;
    }

    .comment-user {
        display: flex;
        flex-direction: column;
        margin-left: 2%;
        padding: 1%;
        border-radius: 5px;
        background-color: rgb(219, 222, 226);
        height: 50px;
        line-height: 0.8;
    }

    .comment-user-name {
        font-weight: bold;
    }

    .comment-pic-round {
        border-radius: 50% !important;
        height: 50px;
        width: 50px;
    }

    .com-input {
        width: 97%;
        height: 3em;
        padding: 1%;
        margin-top: 2%;
        margin-bottom: 2%;
        border-radius: 5px;
    }

    .com-input:focus {
        color: #495057;
        background-color: #fff;
        border-color: rgb(30, 51, 121);
        outline: 0;
        box-shadow: none;
    }

/* Boutons options de post */
    .dropdown {
        margin-left: auto;
        position: relative;
        display: flex;
    }

    .dropdown-btn {
        color: black;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }

    .dropdown-content {
        background-color: #f1f1f1;
        border-radius: 5px;
        min-width: 200px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        position: absolute;
        top: 55px;
        right: 10px;
    }

    .dropdown-options {
        margin: 3%;
        font-weight: bold;
    }

/* Boutons options commentaires */
    .dropdown-comments {
        margin-left: auto;
        position: relative;
        display: flex;
    }

    .dropdown-btn-comments {
        color: black;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }

    .dropdown-content-comments {
        background-color: #f1f1f1;
        border-radius: 5px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        position: absolute;
        top: 10px;
        right: 40px;
    }

    .dropdown-options-comments {
        margin: 3%;
        font-weight: bold;
    }
    
</style>