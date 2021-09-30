<template> 
    <div class="container">

        <HeaderWall/>

        <!-- Test bloc post (composant ?) -->
        <main class="main-wall">

            <AddPost/>

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
                        <button @click="postOptions" class="dropdown-btn"><i class="fas fa-ellipsis-v"></i></button>
                        <div id="myDropdown" class="dropdown-content">
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
                        <p class="post-txt">Do you not know death when you see it, old man?</p>
                    </div>
                    <div class="post-img">
                        <img src="../assets/Gandalf_vs_WitchKing.png" class="wall-img">
                    </div>
                    <div class="post-likes">
                        <img src="../assets/pouce.png" class="wall-likes">
                        <p>18</p>
                    </div>
                </div>

                <hr class="card-sep">
                <div class="post-actions">
                    <div class="post-action-like">
                        <i class="far fa-thumbs-up"></i>
                        <span class="like-txt">J'aime</span>
                    </div>
                    <div class="post-action-comment">
                        <i class="far fa-comment-alt"></i>
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
                        <input type="text" class="form-control">
                    </div>
                </div>

            </section>
        </main>

    </div>
</template>




<script>

    import HeaderWall from '../components/HeaderWall.vue'
    import AddPost from '../components/AddPost.vue'

    export default {
        name: 'Wall',
        components: {
            HeaderWall,
            AddPost
        },
        methods: {
            // Fonction déroulement les options Modifier et Supprimer le post
            postOptions() {
                document.getElementById("myDropdown").classList.toggle("show");
                // Fermeture du bouton dropdown dès lors que l'utilisateur clic en dehors du bouton
                window.onclick = function(event) {
                if (!event.target.matches('.dropdown-btn')) {
                    var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                            }
                        }
                    }
                } 
            }
        }
    }

</script>




<style scoped>

    .main-wall {
        background-attachment: fixed;
        background-image: url("../assets/test2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: auto;
        padding: 3%;
    }


    .wall-card {
        width: 50%;
        padding: 1% 2% 1% 2%;
        margin: auto;
        box-shadow: 0 0 20px #000000b3;
        box-sizing: border-box;
        background: #f1f1f1;
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
        margin-left: 10%;
    }

    .post-likes img {
        width: 5%;
        height: 5%;
        margin-right: 2%;
    }

    .card-sep {
        color: rgb(30, 51, 121);
    }

    .post-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    i {
        
    }

    .post-action-like {
        margin-left: 25%;
    }

    .post-action-comment {
        margin-right: 25%;
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
    }

    .comment-user-name {
        font-weight: bold;
        margin-left: 5%;
    
    }

    .comment-pic-round {
        border-radius: 50% !important;
        height: 50px;
        width: 50px;
    }

    .form-control {
        border-radius: 10px;
        width: 100%;
        margin-top: 2%;
        margin-bottom: 2%;
        height: 40px;
    }

    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #8bbafe;
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
    }

    .dropdown-options {
        margin-left: 10%;
        font-weight: bold;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {
        background-color: #ddd
    }

    .show {
        display:block;
    }


</style>