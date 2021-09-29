<template>
    <div class="container">

        <HeaderWall/>
        
        <!-- Test bloc community -->
        <main class="main-community">

        </main>

    </div>
</template>


<script>

    import HeaderWall from '../components/HeaderWall.vue'

    export default {
        name: 'Community',
        components: {
            HeaderWall
        }
    }

</script>


<style scoped>

    .main-community {
        background-image: url("../assets/test2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: auto;
        padding: 5%;
    }

</style>