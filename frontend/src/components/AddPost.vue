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
                <div class="post-img">
                    <!-- <i class="fas fa-folder-plus"></i> -->
                    <label  title="Ajouter un fichier" for="addContent"><i class="far fa-file-image"></i></label>
                    <input type="file"
                        id="addContent"
                        name="addContent"
                        accept="image/*"
                    >
                </div>
                <button type="submit" class="post-btn">Publier</button>
            </div>
            
        </form>            
        
    </section>

</template>



<script>

    export default {
        name: 'AddPost'
    }

</script>



<style scoped> 

    .post-container {
        width: 50%;
        margin: auto;
        height: auto;
        margin-bottom: 3%;
    }  

    .post-card {
        box-shadow: 0 0 20px #000000b3;
        background: #f1f1f1;
        border-radius: 5px;
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

    .post-img > input {
        display: none;
    }

    .post-img {
        width: 10%;
        font-size: 1.5em;
        justify-content: center;
        align-content: center;
        display: flex;
        padding-top: 1%;
        color: rgb(30, 51, 121);
        transition: transform .3s;
    }

    .post-img:hover {
        transform: scale(1.1);
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

</style>