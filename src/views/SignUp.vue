<template>
    <div class="container">

        <h1>Créer un compte</h1>

        <form class="form-signup">

            <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" v-model="formData.nom" name="nom" id="nom" class="form-input">
                <div class="form-err"></div>
            </div>
            <div class="form-group">
                <label for="prenom">Prénom</label>
                <input type="text" v-model="formData.prenom" name="prenom" id="prenom" class="form-input">
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

        <div class="signup-login">
            <p>Déjà inscrit ? <a href="">Connectez-vous !</a></p>
        </div>

    </div>
</template>


<script>

    export default {
        name: 'SignUp',
        data() {
            return {
                formDataSignUp: [
                    {
                    nom: '',
                    prenom: '',
                    email: '',
                    mdp: ''
                    }
                ]
            }
        },
        methods: {
            envoiForm() {
                
            }
        }
    }

</script>




<style scoped>



</style>