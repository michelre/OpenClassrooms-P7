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
            <div class="post-description">
                <p class="post-txt">{{post.message}}</p>
            </div>
            <div class="post-img">
                <img :src="`http://localhost:3000${post.media}`" class="wall-img">
            </div>
        </div>

        <hr class="card-sep">


        <div class="boutons">
            <button class="btn-annuler" @click="cancelModify">Annuler</button>
            <button class="btn-image">Modifier l'image</button>
            <button class="btn-valider">Enregistrer les modifications</button>
        </div>


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
        /*
        created() {
            fetch("http://localhost:3000/api/posts").then(res => res.json()).then(res => {
            this.posts = res;
            }) 
        },
        */
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
            getOnePost(postId) {
            //const postId = this.$route.params.id;
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
                this.post = res.data.result[0];
                console.log(this.post);
                });
            },


/*
            // Fonction pour récupérer un seul post - NON FONCTIONNEL
            getOnePost(postId) {
            console.log(postId)
            //const postId = this.$route.params.id;
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
                this.post = res.data.result[0];
                console.log(this.post);
                });
            },
*/


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