<template>
    <div class="container">

        <HeaderWall/>

        <!-- Test bloc profil -->
        <main class="main-profil">

             <ProfilAvatar style="display: none" />
      
            <section class="profil-card">


                <div class="profil-pic-name">

                <div class="profil-pic">
                    <label for="profilPic" class="testpic">
                        <i class="fas fa-user-circle"></i>
                    </label>
                    <input type="file"
                           name="profilPic" 
                           id="profilPic"
                           accept="image/*"
                    >
                    <button @click="validPic()">Valider</button>
                </div>


                    <h1 class="profil-name">Witch-King of Angmar</h1>
                </div>

                <hr class="profil-sep">

                <div class="profil-informations">
                    <form class="form-profil">

                        <div class="form-group">
                            <label for="pseudo">Pseudo</label>
                            <input type="text" v-model="formData.pseudo" name="pseudo" id="pseudo" class="form-input">
                            <div class="form-err"></div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" v-model="formData.email" name="email" id="email" class="form-input">
                            <div class="form-err"></div>
                        </div>
                        <div class="form-group">
                            <label for="mdp">Mot de passe actuel</label>
                            <input type="password" v-model="formData.mdp" name="mdp" id="mdp" class="form-input">
                            <div class="form-err"></div>
                        </div>
                        <div class="form-group">
                            <label for="mdp">Nouveau mot de passe</label>
                            <input type="password" v-model="formData.mdp" name="mdp" id="mdp" class="form-input">
                            <div class="form-err"></div>
                        </div>

                        <button v-on:click="envoiForm" class="form-btn">Enregistrer les modifications</button>

                    </form>
                </div>

            <hr class="profil-sep">

                <button v-on:click="envoiForm" class="suppr-btn">Supprimer le compte</button>

            </section>

   

        </main>

    </div>
</template>



<script>

    import HeaderWall from '../components/HeaderWall.vue'
    import ProfilAvatar from '../components/ProfilAvatar.vue'

    import axios from 'axios'

    export default {
        name: 'Profil',
        components: {
            HeaderWall,
            ProfilAvatar
        },
        data() {
            return {
                formData:
                    {
                    pseudo: '',
                    email: '',
                    mdp: ''
                    }
                }
        },
        methods: {
            envoiForm() {
                
            },
            validPic() {
                // Récupération de l'image
                let img = document.getElementById('profilPic').files[0]
                    // Ajout de l'envoi de l'image au formData
                    var formData = new FormData()
                    formData.append('img', img)
                    // Envoi des données sur l'url du serveur
                    axios.post('http://localhost:8000/upload_image', formData)
                        .then((resp) => {
                            console.log(resp)
                        })
                        .catch((err) => {
                            console.log(err.response)
                        })   
                    }     
                }
    }

</script>  



<style scoped>

.profil-pic > input {
    display: none;
}

.profil-pic {
    display: flex;
    flex-direction: column;
}

.testpic {
    font-size: 3em;
    
}

    .container {
        overflow: hidden;
        margin: 0;
    }

    .main-profil {
        background-attachment: fixed;
        background-image: url("../assets/test2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 80vh;
        padding: 3%;
    }

    .profil-card {
        width: 30%;
        height: auto;
        margin: auto;
        padding: 1%;
        background: #f1f1f1;
        border-radius: 5px;
        box-shadow: 0 0 20px #000000b3;
        box-sizing: border-box;
    }

    .profil-pic-name {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2%;
        margin-bottom: 3%;
    }

    .profil-pic-img {
        border-radius: 50% !important;
        width: 100px;
        height: 100px;
    }

    .profil-name {
        margin-left: 5%;
    }

    .profil-informations {
        width: 80%;
        margin: auto;
        padding-top: 3%;
        padding-bottom: 3%;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    input {
        margin-bottom: 3%;
    }

    .form-btn {
        width: 100%;
        margin-top: 3%;
        background-color: rgb(49, 94, 240);
        color: white;
        height: 3em;
        border-radius: 10px;
    }

    .suppr-btn {
        width: 40%;
        display: block;
        margin: auto;
        background-color: rgb(240, 49, 49);
        color: white;
        height: 3em;
        border-radius: 10px;
    }

    .profil-sep {
        color: rgb(30, 51, 121);
        margin: 3%;
    }

</style>