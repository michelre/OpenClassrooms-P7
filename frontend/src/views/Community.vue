<template>
    <div class="container">

        <HeaderWall/>

        <!-- Test bloc community -->
        <main class="main-community">

            <section class="community-card">
                <div class="community-title">
                    <h1>Membres de l'équipe</h1>
                </div>

                <!-- Input de recherche de membre -->
                <div class="community-search">
                    <input type="text" name="pseudo" id="pseudo" class="community-input" placeholder="Rechercher un collègue"
                    v-model="searchKey"
                    autocomplete="off"
                    >
                    <button type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                
                <!-- Affichage du nombre de résultats -->
                <span class="search-result" v-if="searchKey && filteredList.length >= 1">
                    {{ filteredList.length }} Résultat<span v-if="filteredList.length >= 2">s</span>
                </span>
                <!-- En cas de recherche infructueuse -->
                <div class="search-no-result" v-if="filteredList.length == 0">
                    <h2>Désolé..</h2>
                    <p>Aucun résultat trouvé</p>
                </div>
            </section>

            <!-- Affichage de l'intégralité des membres -->
            <div class="community-list" >
                <div class="community-member" v-for="user in filteredList" :key="user.id_user">
                    <div class="member-pic">
                        <img class="member-pic-img" :src="user.image">
                    </div>
                    <h2 class="member-name">{{user.nom}} {{user.prenom}}</h2>
                </div>
            </div>

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
        props: {
            user: Object
        },
        data() {
            return {
                users: [],
                searchKey: ''
            }
        },
        computed: {
            filteredList() {
                return this.users.filter((user) => {
                    return user.nom.toLowerCase().includes(this.searchKey.toLowerCase());
                })
            }
        },
        created() {
            fetch("http://localhost:3000/api/users").then(res => res.json()).then(res => {
                this.users = res;
            }) 
        },
    }

</script>


<style scoped>

    .search-result {
        font-size: 1.2em;
        display: flex;
        justify-content: center;
        margin-top: 2%;
        font-weight: bold;
    }

    .search-no-result {
        text-align: center;
        font-weight: bold;
    }

    .main-community {
        background-attachment: fixed;
        background-image: url("../assets/test2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 500px;
        padding: 3%;
    }

    .community-card {
        width: 30%;
        margin: auto;
        padding-top: 0.1%;
        padding-bottom: 1%;
        background: #f1f1f1;
        border-radius: 5px;
        box-shadow: 0 0 20px #000000b3;
        box-sizing: border-box;
    }

    .community-title {
        text-align: center;
    }

    .community-search {
        position: relative;
        width: 75%;
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
        margin: auto;
        width: 60%;
    }

    .community-member {
        display: flex;
        width: 30%;
        margin-top: 5%;
        padding: 0.5%;
        background: #f1f1f1;
        box-shadow: 0 0 20px #000000b3;
        border-radius: 5px;
        align-items: center;
    }

    .member-name {
        font-size: 1.1em;
    }

    .member-pic {
        margin-right: 5%;
    }

    .member-pic-img {
        width: 80px;
        height: 80px;
    }

</style>