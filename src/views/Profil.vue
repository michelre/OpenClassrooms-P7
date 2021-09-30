<template>
    <div class="container">

        <HeaderWall/>

        <!-- Test bloc profil -->
        <main class="main-profil">
            <section class="profil-card">

                <div class="profil-pic-name">
                    <div class="profil-pic">
                        <img src="../assets/witchKing.jpeg" class="profil-pic-img">
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

    export default {
        name: 'Profil',
        components: {
            HeaderWall
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
                
            }
        }
    }

</script>  




<style scoped>

    .container {
        overflow: hidden;
        margin: 0;
    }

    .main-profil {
        background-attachment: fixed;
        background-image: url("../assets/test2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: auto;
        padding: 3%;
    }

    .profil-card {
        width: 50%;
        height: auto;
        padding: 2%;
        margin: auto;
        box-shadow: 0 0 20px #000000b3;
        box-sizing: border-box;
        background: #f1f1f1;
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
        width: 30%;
        display: block;
        margin: auto;
        background-color: rgb(240, 49, 49);
        color: white;
        height: 3em;
        border-radius: 10px;
    }

</style>