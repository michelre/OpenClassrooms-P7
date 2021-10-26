 <template>
 
    <section class="wall-card">
                <div class="post-card-header">
                    <a href="/profil" class="post-header-pic"> 
                        <img src="../assets/witchKing.jpeg" width="50" class="post-header-pic-round">
                    </a>
                    <div class="post-header-name-date">
                        <div class="post-header-name">
                            <p>Witch-King of Angmar<br></p>
                        </div>
                        <div class="post-header-date">
                            <p>27 septembre 2021</p>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button 
                            @click="menuActive = !menuActive" 
                            v-click-outside="clickOutside" 
                            class="dropdown-btn"
                        >
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                        <div v-if="menuActive" id="myDropdown" class="dropdown-content">
                            <a href="#">
                                <i class="far fa-edit"></i>
                                <span class="dropdown-options">Modifier</span></a>
                            <a href="#">
                                <i class="far fa-trash-alt"></i><span class="dropdown-options">Supprimer</span></a>
                        </div>
                    </div>
                </div>

                <div class="post-content">
                    <div class="post-description">
                        <p class="post-txt">{{post.message}}</p>
                    </div>
                    <div class="post-img">
                        <img :src="`http://localhost:3000${post.media}`" class="wall-img">
                    </div>
                    <div class="post-likes">
                        <img src="../assets/pouce.png" class="wall-likes">
                        <p>18</p>
                    </div>
                </div>

                <hr class="card-sep">
                <div class="post-actions">
                    <div class="post-action-like">
                        <i class="far fa-thumbs-up" id="icon-like"></i>
                        <span class="like-txt">J'aime</span>
                    </div>
                    <div class="post-action-comment">
                        <i class="far fa-comment-alt" id="icon-comment"></i>
                        <span class="comment-txt">Commenter</span>
                    </div>
                </div>
                <hr class="card-sep">

                <div class="comment">
                    <div class="comment-auth">
                        <img src="../assets/merry.jpg" width="40" class="comment-pic-round">
                        <div class="comment-user"> 
                            <span class="comment-user-name">Merry</span> 
                            <p class="comment-text">C'mon Pippin !</p>
                        </div>
                    </div>

                    <div class="comment-input">
                        <input type="text" class="com-input" placeholder="Écrivez un commentaire ici...">
                    </div>
                </div>
            </section>

       </template>


<script>

    export default {
        name: 'Post',
        props: {
            post: Object
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
    }

    .post-action-comment {
        margin-right: 20%;
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
    .dropdown-btn {
        color: black;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }

    .dropdown {
        margin-left: auto;
        position: relative;
        display: flex;
    }

    .dropdown-options {
        margin-left: 10%;
        font-weight: bold;
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

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        margin: 1%;
    }

    .dropdown-content a:hover {
        background-color: #ddd;
    }

    .show {
        display: block;
    }
</style>