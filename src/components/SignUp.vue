<template>
    <section class="signup-container">

        <h1>Créer un compte</h1>

        <form class="form-card">

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
                <label for="mdp">Mot de passe</label>
                <input type="password" v-model="formData.mdp" name="mdp" id="mdp" class="form-input">
                <div class="form-err"></div>
            </div>
            <div class="form-group">
                <label for="mdp">Confirmer le mot de passe</label>
                <input type="password" v-model="formData.mdp" name="mdp" id="mdp" class="form-input">
                <div class="form-err"></div>
            </div>

            <button v-on:click="envoiForm" class="form-btn">Se connecter</button>
        </form>

        <div class="sign-card">
            <p>Déjà inscrit ? <a href="" @click.prevent="changeForm(false)">Connectez-vous !</a></p>
        </div>

    </section>
</template>


<script>

    export default {
        name: 'SignUp',
        components: {

        },
        props: {
            changeForm: Function 
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
                this.$router.push({ name:'Wall' }); 
            }
        }
    }

</script>




<style scoped>

    * {
        font-family: 'Titillium Web', sans-serif;
        background-color: white;
        border-radius: 5px;
    }

    .signup-container {
        padding: 0.5%;
    }

    h1 {
        text-align: center;
        font-size: 2em;
    }

    .form-card {
        margin-left: 5%;
        margin-right: 5%;
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

    .sign-card {
        font-style: italic;
        text-align: center;
    }

</style>