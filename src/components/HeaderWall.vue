<template>
    <header class="header-container">

        <nav>
            <router-link to="/wall" title="Retour à la page d'accueil" class="logo-header">
                <img src="../assets/main-header.png" alt="" class="logo-img">
            </router-link>
            <router-link to="/community" title="Membres de l'équipe" class="users-header">
                <i class="fas -solid fa-users"></i>
            </router-link>
            <router-link to="/profil" title="Profil" class="profil-header">
                <i class="fas fa-user-circle"></i>
            </router-link>
            <router-link to="/" title="Se déconnecter" class="deconnect-header">
                <i class="fas -solid fa-power-off"></i>
            </router-link>
        </nav>

    </header> 
</template>



<script>

    export default {
        name: 'HeaderWall'
    }

</script> 



<style scoped>

    header {
        height: 60px;
        margin: auto;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo-header {
        margin-right: 35%;
        margin-left: 3%;
    }

    .logo-img {
       height: 60px;
    }

    .users-header, .profil-header, .deconnect-header {
        margin-right: 3%;
    }

    i {
        font-size: 1.5em;
        color: rgb(30, 51, 121);
        transition: transform .3s;
    }

    i:hover {
        transform: scale(1.3)
    }

</style>