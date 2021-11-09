<template>
    <div class="container">
        
        <HeaderWall/>
     

        <main class="modify-bck"
            :key="post.id"
            :post="post"
            >


<!--
        <Post v-for="post in posts" 
            :key="post.id"
            :post="post"
            :updatePost="updatePost"
        />
-->
        <section class="modify-card">
        <!-- En-tête du post avec la photo de profil de l'auteur, son nom/prénom et la date d'ajout du post -->
        <div class="post-card-header">
            <a href="/profil" class="post-header-pic"> 
                <img src="../assets/witchKing.jpeg" width="50" class="post-header-pic-round">
            </a>
            <div class="post-header-name-date">
                <div class="post-header-name">
                    <p>{{post.nom}} {{post.prenom}}<br></p>
                </div>
                <div class="post-header-date">
                    <p>{{ datePost(post.date_ajout) }}</p>
                </div>
            </div>
        </div>


        <!-- Corps du post avec le message, l'image, et le nombre de likes -->
        <div class="post-content">
            <form class="post-description" @submit.prevent="updatePost">
                <input class="post-txt" v-model="post.message">

                <div class="boutons">
                    <button class="btn-annuler" @click="cancelModify">Annuler</button>
                    <button class="btn-image">Modifier l'image</button>
                    <button class="btn-valider" type="submit">Enregistrer les modifications</button>
                 </div>
            </form>

            <div class="post-img">
                <img :src="`http://localhost:3000${post.media}`" class="wall-img">
            </div>
        </div>

        <hr class="card-sep">





        </section>


        </main>
    </div>
</template>



<script>

    import axios from 'axios'
    import HeaderWall from '../components/HeaderWall.vue'

    export default {
        name: 'ModifyPost',
        components: {
            HeaderWall
        },
       
        data() {
            return {
                post: {}
            }
        },
        created() {
            this.getOnePost();
        },
        methods: {
            cancelModify() {
                this.$router.push({ name:'Wall' });
            },
            validMofidy() {
                this.$router.push({ name:'Wall' });
            },
            datePost(date){
                const event = new Date(date);
                const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            return event.toLocaleDateString('fr-Fr', options);
            },
            
            // Fonction pour récupérer un seul post avant de procéder à la modification
            getOnePost() {
            const postId = this.$route.params.id;
            const token = localStorage.getItem('token')
            console.log("publication id:" + postId);
            axios
                .get(`http://localhost:3000/api/posts/${postId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                })
                .then((res) => {
                this.post = res.data;
                console.log(this.post);
                });
            },

            // Modification d'une publication - NON FONCTIONNEL A AJOUTER A MODIFY POST UNE FOIS QUE LAFFICHAGE DE LA PUBLICATION Y SERA INTEGREE
            updatePost() {
                const postId = this.$route.params.id;
                //const token = localStorage.getItem('token')
                var formData = new FormData();
                    formData.append('message', this.post.message);
                axios({
                    method: "put",
                    url: `http://localhost:3000/api/posts/${postId}`,
                    data: formData,
                    headers: { "Content-Type": "application/json" },
                })
            //  UNE FOIS LES VERIFICATIONS EFFECTUEES, REDIRIGER VERS LE COMPOSANT ADDPOST POUR MODIFIER LE POST
                .then(() => {
                    this.$router.push({ name: "Wall" });
                })
            }


        }
    }

</script>




<style scoped>

    .modify-bck {
        background-attachment: fixed;
        background-image: url("../assets/test2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: auto;
        padding: 3%;
    }

    .modify-card {
        width: 50%;
        margin: auto;
        padding: 1% 2% 1% 2%;
        background: #f1f1f1;
        border-radius: 2px;
        box-shadow: 0 0 20px #000000b3;
        box-sizing: border-box;
        margin-bottom: 3%;
    }


</style>