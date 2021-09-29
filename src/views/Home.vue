<template>

    <div class="container">
            <HeaderHome/>
        <div class="hero">
            <div class="register-card">

                <div class="register-card-btn">
                    <button v-on:click="changeForm(false)" class="form-btn"><span>SE CONNECTER</span></button>
                    <button v-on:click="changeForm(true)" class="form-btn"><span>S'ENREGISTRER</span></button>
                </div>

                <Login v-if="!registerForm" :changeForm="changeForm" />
                <SignUp v-if="registerForm" :changeForm="changeForm" />
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
        },
        data() {
            return {
                registerForm: false
            }
        },
        methods: {
            changeForm(registerForm) {
                this.registerForm = registerForm
            }
        }
    }
</script>




<style scoped>

    * {
        font-family: 'Titillium Web', sans-serif;
    }

    .container {
        overflow: hidden;
    }

    .hero {
        background-image: url("../assets/test2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 70vh;
        padding: 5%;
    }

    .register-card {
        width: 40%;
        height: 60%;
        margin: auto;
    }

    .register-card-btn {
        display: flex;
        padding-bottom: 3%;
    }

    button {
        width: 50%;
        padding: 2%;
        font-size: 18px;
        font-family: sans-serif;
        text-decoration: none;
        color: #333;
        border: 2px solid #333;
        letter-spacing: 2px;
        text-align: center;
        position: relative;
        transition: all .35s;
    }

    button span {
        position: relative;
        z-index: 2;
    }

    button:after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: rgb(49, 94, 240);
        transition: all .35s;
    }

    button:hover {
        color: #fff;
    }

    button:hover:after {
        width: 100%;
    }
 


</style>