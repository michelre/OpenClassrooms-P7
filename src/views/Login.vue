<template>
    <div class="container">

        <h1>Identifiez-vous</h1>

        <form class="form-login">

            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" v-model="formData.email" id="email" class="form-control">
                <div class="form-err"></div>
            </div>

            <div class="form-group">
                <label for="mdp">Mot de passe</label>
                <input type="password" v-model="formData.mdp" id="mdp" class="form-control">
                <div class="form-err"></div>
            </div>

            <button v-on:click="envoiForm" class="form-btn">Se connecter</button>
        </form>

        <div class="signup-login">
            <p>Pas encore inscrit ? <a href="">Créez un compte !</a></p>
        </div>

    </div>
</template>




<script>

    export default {
        name: 'Login',
        data() {
            return {
                formaData: {
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



</style>