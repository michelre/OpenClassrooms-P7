<template>
    <header class="header-container">

        <!-- Header constitué d'un unique logo Groupomania réservé à la page d'identification -->
        <div class="logo-header">
            <img src="../assets/main-header.png" alt="" class="logo-img">
        </div>

    </header>
</template>


<script>

    export default {
        name: 'HeaderHome'
    }

</script> 


<style>

    header {
        height: 60px;
    }

    .logo-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo-img {
       height: 60px;
    }

</style>
