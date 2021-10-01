<template>

    <section class="post-container">

        <form class="post-card">
            <h1>Exprimez-vous...</h1>
            <div class="post-infos">
                <label for="postTitle" class="hidden">Nouvelle publication</label>
                <textarea name="postTitle" id="postTitle" placeholder="Que voulez-vous partager ?"></textarea>
            </div>
            <div class="post-content">
                <input type="text" name="postContent" id="postContent" class="post-input" placeholder="Joindre un lien ?">
            
            <button type="submit" class="post-btn">Publier</button>
            </div>
        </form>            
        
    </section>


<!--    Premier essai (affichage avec photo de profil)

    <section class="post-container">

        <div class="post-card">
            <div class="post-profil">
                <img src="../assets/witchKing.jpeg" class="member-pic-img">
            </div>
            <div class="post-infos">
                <div class="post-title">
                    <input type="text" name="postTitle" id="postTitle" class="post-input" placeholder="Ajouter une nouvelle publication ?">
                </div>
                <div class="post-content">
                    <input type="text" name="postContent" id="postContent" class="post-content" placeholder="Joindre un lien ?">
                </div>
            </div>
        </div>

        <hr class="post-sep">

            <button v-on:click="envoiForm" class="addPost-btn">Publier</button>

    </section>
-->

</template>



<script>

    export default {
        name: 'AddPost'
    }

</script>



<style scoped> 

    .post-container {
        width: 50%;
        height: auto;
        margin: auto;
        margin-bottom: 3%;
    }  

    .post-card {
        box-shadow: 0 0 20px #000000b3;
        background: #f1f1f1;
    }  

    .hidden {
        display: none;
    }

    h1 {
        padding-top: 2%;
        padding-left: 4%;
    }

    .post-infos {
        text-align: center;
    }

    textarea {
        width: 90%;
        height: 5em;
        padding: 1%;
        margin-bottom: 2%;
        resize: none;
    }

    .post-content {
        display: flex;
        justify-content: space-between;
    }

    .post-input {
        width: 40%;
        margin-left: 4%;
        margin-bottom: 2%;
        padding: 1%;
    }

    .post-btn {
        margin-right: 4%;
        margin-bottom: 2%;
        width: 40%;
        background-color: rgb(49, 94, 240);
        color: white;
        height: 3em;
        border-radius: 10px;
    }


/*  Premier essai (affichage avec photo de profil)

    .post-container {
        border: 3px solid white;
        width: 50%;
        height: 20vh;
        margin: auto;
        margin-bottom: 3%;
    }

    .post-card {
        display: flex;
        align-items: center;
    }

    .member-pic-img { 
        border-radius: 50% !important;
        height: 50px;
        width: 50px;
    }

    .post-infos {
        margin-left: 5%;
        margin-right: 5%;
        width: 100%;
    }

    .post-title input {
        width: 100%;
        height: 40px;
        margin-bottom: 5%;
    }

    .post-content input {
        width: 100%;
        height: 40px;
    }
*/
   
</style>