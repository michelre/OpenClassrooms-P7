<template>
    <div class="container">

        <HeaderWall/>

        <!-- Test bloc profil -->
        <main class="main-profil">

            <ProfilAvatar style="display: none" />
      
            <section class="profil-card">

                <div class="profil-pic-name">

                    <form class="profil-pic">
                        <label for="profilPic" class="testpic">
                            <i class="fas fa-user-circle"></i>
                        </label>
                        <input type="file"
                            name="profilPic" 
                            id="profilPic"
                            accept="image/*"
                        >
                        <button @click="validPic()">Valider</button>
                    </form>

                    <h1 class="profil-name">{{user.nom}} {{user.prenom}}</h1>
                </div>

                <hr class="profil-sep">

                <div class="profil-informations">
                    <form class="form-profil">

                        <div class="form-group">
                            <label for="nom">Nom</label>
                            <input type="text" v-model.lazy="user.nom" name="nom" id="nom" class="form-input">
                            <div class="form-err"></div>
                        </div>
                        <div class="form-group">
                            <label for="prenom">Prénom</label>
                            <input type="text" v-model.lazy="user.prenom" name="prenom" id="prenom" class="form-input">
                            <div class="form-err"></div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" v-model.lazy="user.email" name="email" id="email" class="form-input">
                            <div class="form-err"></div>
                        </div>
         
                        <button class="form-btn" @click="updateProfil()">Enregistrer les modifications</button>

                    </form>
                </div>

            <hr class="profil-sep">

                <button class="suppr-btn" @click="deleteUser(user.id)">Supprimer le compte</button>

            </section>

   
 
        </main>

    </div>
</template>



<script>

    import HeaderWall from '../components/HeaderWall.vue'
    import ProfilAvatar from '../components/ProfilAvatar.vue'

    import axios from 'axios'

    export default {
        name: 'Profil',
        components: {
            HeaderWall,
            ProfilAvatar
        },
        data() {
            return {
                profilForm:
                    {
                        nom: '',
                        prenom: '',
                        email: '',
                    },
                user: {},
            }
        },
        created() {
            this.getUserProfil();
        },
        methods: {

            // Récupération des données de l'utilisateur - FONCTIONNEL 
            getUserProfil() {
                const userId = JSON.parse(localStorage.id);
                console.log(userId);
                axios.get(`http://localhost:3000/api/users/${userId}`, {
                    headers: {
                        "Content-Type" : "application/json",
                    },
                }).then((res) => {
                    this.user = res.data;
                    console.log(this.user);
                });
            },
        },

            // Try 1 modification de profil - NON FONCTIONNEL
            updateProfil(profilForm) {
                const userId = JSON.parse(localStorage.id);
                axios({
                    method: "put",
                    url: `http://localhost:3000/api/users/${userId}`,
                    data: profilForm,
                    headers: { "Content-Type": "application/json" },
                })
                .then(reponse => { 
                this.user.push(reponse.data)
            }); 
        },

/*
            // Try 2 modification de profil - NON FONCTIONNEL
            updateProfil(profilForm) {
                const userId = localStorage.getItem('id');
                axios({
                    method: "put",
                    url: `http://localhost:3000/api/users/${userId}`,
                    data: profilForm,
                    headers: { "Content-Type": "application/json" },
                })
                .then(reponse => { 
                this.user.push(reponse.data)
                }); 
            },
*/


            deleteUser(id) {
                if (window.confirm("ATTENTION : Vous êtes sur le point de supprimer votre compte ! Toute suppression est définitive, êtes-vous certain de ce choix ?")) {
                    const token = localStorage.getItem('token')
                    console.log(token);
                    axios
                        .delete(`http://localhost:3000/api/users/${id}`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                    },
                    })
                    .then(res => {
                        if (res) {
                            localStorage.removeItem('token');
                            this.$router.push('/signup'); 
                        }
                    })
                    .catch(error => {
                        console.log( error )
                    })
                
                }
            },



/*
            // TRY 2 SUPPRESSION PROFIL - NON FONCTIONNEL -EN COURS
            deleteUser(id) {
                if (window.confirm("ATTENTION : Vous êtes sur le point de supprimer votre compte ! Toute suppression est définitive, êtes-vous certain de ce choix ?")) {
                    const token = localStorage.getItem('token')
                    console.log(token);
                    axios
                        .delete(`http://localhost:3000/api/users/${id}`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                    },
                    })
                    .then(res => {
                        if (res) {
                            localStorage.removeItem('token');
                            this.$router.push('/signup'); 
                        }
                    })
                    .catch(error => {
                        console.log( error )
                    })
                
                }
            },
*/

/*
           // TRY 3 SUPPRESSION PROFIL - NON FONCTIONNEL
        deleteUser() {
        const token = localStorage.getItem('token')
        const id = localStorage.getItem('id')
        
        axios.delete('http://localhost:3000/api/delete/' + id, {
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(res => {
                if (res) {
                    localStorage.removeItem('token');
                    this.$router.push('/signup'); 
                }
            })
            .catch(error => {
                console.log( error )
            })
        }
*/


/*
            // TRY 1 SUPPRESSION PROFIL
            deleteProfil(userId) {
                console.log(userId);
                const token = localStorage.getItem('token')
                console.log(token); 
                axios
                    .delete(`http://localhost:3000/api/users/${userId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    }),
                    alert('Etes-vous certain de vouloir supprimer votre compte ?')
                    console.log("Utilisateur supprimé !");
                },
*/


/*
            // TEST IMAGE 
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
                },

            // Try ajout d'une image de profil
            validPic() {
                // Récupération de l'image
                let img = document.getElementById('profilPic').files[0]
                    // Ajout de l'envoi de l'image au formData
                    var formData = new FormData()
                    formData.append('img', img)
                    // Envoi des données sur l'url du serveur
                    axios.post('http://localhost:8000/upload_image', formData)
                        .then((resp) => {
                            console.log(resp)
                        })
                        .catch((err) => {
                            console.log(err.response)
                        })   
                    }     
*/ 
            
    
    
         

    }

</script>  



<style scoped>

.profil-pic > input {
    display: none;
}

.profil-pic {
    display: flex;
    flex-direction: column;
}

.testpic {
    font-size: 3em;
}

    .container {
        overflow: hidden;
        margin: 0;
    }

    .main-profil {
        background-attachment: fixed;
        background-image: url("../assets/test2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 80vh;
        padding: 3%;
    }

    .profil-card {
        width: 30%;
        height: auto;
        margin: auto;
        padding: 1%;
        background: #f1f1f1;
        border-radius: 5px;
        box-shadow: 0 0 20px #000000b3;
        box-sizing: border-box;
    }

    .profil-pic-name {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2%;
        margin-bottom: 3%;
    }

    .profil-pic-img {
        border-radius: 50% !important;
        width: 100px;
        height: 100px;
    }

    .profil-name {
        margin-left: 5%;
    }

    .profil-informations {
        width: 80%;
        margin: auto;
        padding-top: 3%;
        padding-bottom: 3%;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    input {
        margin-bottom: 3%;
    }

    .form-btn {
        width: 100%;
        margin-top: 3%;
        background-color: rgb(49, 94, 240);
        color: white;
        height: 3em;
        border-radius: 10px;
    }

    .suppr-btn {
        width: 40%;
        display: block;
        margin: auto;
        background-color: rgb(240, 49, 49);
        color: white;
        height: 3em;
        border-radius: 10px;
    }

    .profil-sep {
        color: rgb(30, 51, 121);
        margin: 3%;
    }

</style>