<template>

    <div class="container">
            <HeaderHome/>
        <div class="hero">
            <div class="register-card">

                <div class="register-card-btn">
                    <button v-on:click="envoiForm" class="form-btn">SE CONNECTER</button>
                    <button v-on:click="envoiForm" class="form-btn">S'ENREGISTRER</button>
                </div>

                <Login />
                <SignUp style="display: none"/>
            </div>
        </div>
    </div>

</template>




<script>

    import HeaderHome from '../components/HeaderHome.vue'
    import Login from '../components/Login.vue'
    import SignUp from'../components/SignUp.vue'

    export default {
        name: 'Home',
        components: {
            Login,
            SignUp,
            HeaderHome
        }
    }
</script>




<style scoped>

    * {
        font-family: 'Titillium Web', sans-serif;
    }

    .container {
        overflow: hidden;
        margin: 0;
    }

    .hero {
        background-image: url("../assets/test2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;

        padding: 5%;
    }

    .register-card {
        width: 40%;
        height: 60%;
        margin: auto;
    }

    .register-card-btn {
        display: flex;
        padding-bottom: 5%;
    }

    .form-btn {
        padding: 2%;
        border-radius: 10px;
        background-color: rgb(49, 94, 240);
        color: white;
        width: 50%;
        margin: auto;
    }


</style>