<template>
    <div class="container">

        <HeaderWall/>

        <!-- Test bloc community -->
        <main class="main-community">
            <section class="community-card">

                <div class="community-title">
                    <h1>Membres de l'équipe</h1>
                </div>

                <div class="community-search">
                    <input type="text" name="pseudo" id="pseudo" class="community-input" placeholder="Rechercher un collaborateur">
                    <button type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </div>

                <div class="community-list">

                    <div class="community-member">
                        <div class="member-pic">
                            <img src="../assets/witchKing.jpeg" class="member-pic-img">
                        </div>
                        <h1 class="member-name">Witch-King of Angmar</h1>
                    </div>
                    <div class="community-member">
                        <div class="member-pic">
                            <img src="../assets/witchKing.jpeg" class="member-pic-img">
                        </div>
                        <h1 class="member-name">Witch-King of Angmar</h1>
                    </div>
                    <div class="community-member">
                        <div class="member-pic">
                            <img src="../assets/witchKing.jpeg" class="member-pic-img">
                        </div>
                        <h1 class="member-name">Witch-King of Angmar</h1>
                    </div>
                    <div class="community-member">
                        <div class="member-pic">
                            <img src="../assets/witchKing.jpeg" class="member-pic-img">
                        </div>
                        <h1 class="member-name">Witch-King of Angmar</h1>
                    </div>
                    <div class="community-member">
                        <div class="member-pic">
                            <img src="../assets/witchKing.jpeg" class="member-pic-img">
                        </div>
                        <h1 class="member-name">Witch-King of Angmar</h1>
                    </div>
                    <div class="community-member">
                        <div class="member-pic">
                            <img src="../assets/witchKing.jpeg" class="member-pic-img">
                        </div>
                        <h1 class="member-name">Witch-King of Angmar</h1>
                    </div>

                </div>

            </section>
        </main>

    </div>
</template>


<script>

    import HeaderWall from '../components/HeaderWall.vue'

    export default {
        name: 'Community',
        components: {
            HeaderWall
        },
    }

</script>


<style scoped>

    .main-community {
        background-attachment: fixed;
        background-image: url("../assets/test2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 80vh;
        padding: 3%;
    }

    .community-card {
        width: 80%;
        margin: auto;
    }

    .community-title {
        color: white;
        text-align: center;
    }

    .community-search {
        position: relative;
        width: 35%;
        margin: auto;
        background: white;
    }

    .community-search input {
        width: 100%;
        padding: 20px 0px 20px 10px;
        display: block;
    }

    .community-search button {
        background: transparent;
        border: none;
        cursor: pointer;
        display: inline-block;
        font-size: 20px;
        position: absolute;
        top: 0;
        right: 0;
        padding: 18px 10px;
        z-index: 2;
    }

    .community-search input:focus + button .fa-search {
        color: rgb(49, 94, 240);
    }

    .community-list {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin-top: 3%;
    }

    .community-member {
        display: flex;
        width: 25%;
        margin-top: 3%;
        padding: 1%;
        background: #f1f1f1;
        box-shadow: 0 0 20px #000000b3;
        border-radius: 10px;
        align-items: center;
    }

    .member-name {
        font-size: 1.2em;
    }

    .member-pic {
        margin-right: 5%;
    }

    .member-pic-img {
        width: 100px;
        height: 100px;
    }

</style>