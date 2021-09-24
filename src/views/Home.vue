<template>
    <div class="container">

        <header>
            <a href="" title="" class="logo-header">
                <img src="../assets/main-header.png" alt="" class="logo-img">
            </a>
        </header>

        <div class="hero">
            
           
            

            <Login></Login>
            <SignUp></SignUp>
        
        </div>

    </div>
</template>




<script>

    import Login from '../components/Login.vue'
    import SignUp from'../components/SignUp.vue'

    export default {
        name: 'Home',
        components: {
            Login,
            SignUp
        }
    }
</script>




<style scoped>

    .container {
        overflow: hidden;
        margin: 0;
        
    }

    header {
        height: 55px;
    }

    .logo-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo-img {
       height: 55px;
    }

    .hero {
    background-image: url("../assets/back-img.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 650px;
    
    

    }

 



</style>