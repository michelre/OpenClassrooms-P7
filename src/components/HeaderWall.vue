<template>
    <div class="container">

        <header>
            <nav>
                <a href="/wall" title="" class="logo-header">
                    <img src="../assets/main-header.png" alt="" class="logo-img">
                </a>
                <a href="/community" title="" class="users-header">
                    <i class="fas -solid fa-users"></i>
                </a>
                <a href="/profil" title="" class="profil-header">
                    <i class="fas -duotone fa-camera"></i>
                </a>
                <a href="/" title="" class="deconnect-header">
                    <i class="fas -solid fa-power-off"></i>
                </a>
            </nav>
        </header> 

  </div>
</template>


<script>

    export default {
        name: 'HeaderWall'
    }

</script> 



<style scoped>

    nav {
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo-header {
        margin-right: 35%;
        margin-left: 3%;
    }

    .logo-img {
       height: 55px;
    }

    .users-header, .profil-header, .deconnect-header {
        margin-right: 3%;
    }

    i{
        font-size: 1.5em;
        color: rgb(30, 51, 121);
    }

</style>