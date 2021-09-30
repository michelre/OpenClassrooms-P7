<template>
    <section class="post-container">

        <div class="post-infos">
            <div class="post-profil">
                <img src="../assets/witchKing.jpeg" class="member-pic-img">
            </div>
            <div class="post-title">
                <input type="text" name="postTitle" id="postTitle" class="post-input" placeholder="Ajouter une nouvelle publication ?">
            </div>
            <div class="post-content">
                <input type="text" name="postContent" id="postContent" class="post-content" placeholder="Joindre un lien ?">
            </div>
        </div>

        <hr class="post-sep">

            <button v-on:click="envoiForm" class="addPost-btn">Publier</button>

    </section>
</template>


<script>

    export default {
        name: 'AddPost'
    }

</script>


<style scoped>

    .post-container {
        border: 3px solid white;
        width: 50%;
        height: 20vh;
        margin: auto;
        margin-bottom: 3%;
    }

    .member-pic-img { 
        border-radius: 50% !important;
        height: 50px;
        width: 50px;
    }

</style>