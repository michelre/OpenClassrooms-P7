<template>
    <div class="container">
        
        <HeaderWall/>
     
        <main class="modify-bck">

            <section class="modify-card">

                <!-- En-tête du post avec la photo de profil de l'auteur, son nom/prénom, date d'ajout, et bouton retour au Wall -->
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
                    <button class="btn-annuler" title="Retour au Wall" @click="cancelModify">
                        <i class="far fa-times-circle"></i>
                    </button>
                </div>

                <!-- Contenu de la publication à modifier -->
                <div class="post-content">
                    <form class="post-description" @submit.prevent="updatePost">
                        <input class="post-txt" v-model="post.message">
                        <div class="post-media">
                            <img :src="`http://localhost:3000${post.media}`" class="wall-img">
                        </div>
                        <div class="post-modif">
                            <input type="text" name="postContent" id="postContent" class="post-input" placeholder="Joindre un lien ?" >
                                <div class="post-img">
                                    <label  title="Ajouter un fichier" for="addContent"><i class="far fa-file-image"></i></label>
                                    <input type="file"
                                    id="addContent"
                                    name="addContent"
                                    accept="image/*"
                                    >
                                </div>
                            <button class="post-btn">Enregistrer les modifications</button>
                        </div>
                    </form>
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

            // Modification d'une publication - FONCTIONNEL (à compléter avec l'image)
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
                // Une fois les vérifications et modifications effectuées, rediriger l'utilisateur vers le Wall
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

    .post-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .post-header-pic-round {
        border-radius: 50% !important;
        height: 50px;
        width: 50px
    }

    .post-header-name-date {
        margin-left: 5%;
    }

    .post-header-name {
        font-size: 1.1em;
        font-weight: bold;
    }

    .post-header-date {
        color:gray;
    }

    .btn-annuler {
        border: none;
        font-size: 1.5em;
        color: rgb(30, 51, 121);
    }

    .btn-annuler :hover {
        color: red;
    }

    .post-txt {
        width: 98%;
        margin-bottom: 3%;
        padding-bottom: 5%;
    }

    .post-media {
        margin-bottom: 1%;
    }

    .wall-img {
        width: 100%;
    }

    .post-infos {
        text-align: center;
    }

    .post-input {
        width: 45%;
        margin-bottom: 2%;
        padding: 1%;
    }

    .post-img > input {
        display: none;
    }

    .post-img {
        width: 10%;
        font-size: 1.5em;
        justify-content: center;
        align-content: center;
        display: flex;
        padding-top: 1%;
        color: rgb(30, 51, 121);
        transition: transform .3s;
    }

    .post-img:hover {
        transform: scale(1.1);
    }

    .post-modif {
        display: flex;
        width: 100%;
        margin-top: 3%;
    }

    .post-btn {
        margin-bottom: 2%;
        width: 45%;
        background-color: rgb(49, 94, 240);
        color: white;
        height: 3em;
        border-radius: 10px;
    }

</style>