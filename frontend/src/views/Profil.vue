<template>
    <div class="container">

        <HeaderWall/>

        <!-- Test bloc profil -->
        <main class="main-profil">

            <ProfilAvatar style="display: none" />
      
            <section class="profil-card">

                <div class="profil-pic-name">

                    <div class="profil-pic">
                        <label for="profilPic" class="testpic">
                            <i class="fas fa-user-circle"></i>
                        </label>
                        <input type="file"
                            name="profilPic" 
                            id="profilPic"
                            accept="image/*"
                            
                        >
                        <button type="submit" >Valider</button>
                    </div>

                    <h1 class="profil-name">{{user.nom}} {{user.prenom}}</h1>
                </div>

                <hr class="profil-sep">

                <div class="profil-informations">
                    <form class="form-profil" @submit.prevent="updateProfil(user.id)">

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
         
                        <button class="form-btn" >Enregistrer les modifications</button>

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
                user:
                    {
                        nom: '',
                        prenom: '',
                        email: '',
                        image: ''
                    },
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

            // Modification de profil - FONCTIONNEL
            updateProfil(id) {
                axios({
                    method: "put",
                    url: `http://localhost:3000/api/users/${id}`,
                    data: this.user,
                    headers: { "Content-Type": "application/json" },
                })
                .then(() => { 
                    alert('Profil modifié avec succès !');
                }); 
            },
        
            // Suppression d'un profil - FONCTIONNEL 
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
                            this.$router.push('/'); 
                        }
                    })
                    .catch(error => {
                        console.log( error )
                    })
                
                }
            },

        },


/*
        // TEST 6 AJOUT IMAGE - NON FONCTIONNEL
        envoi(id) {
            // Récupérer l'image
            const image = document.getElementById('profilPic').files[0]
            console.log(image)
                // Création d'un formData pour l'envoi de l'image
                var formData = new FormData()
                formData.append('image', image)
                axios.post(`http://localhost:3000/api/users/${id}`, formData)
                .then((resp) => {
                    console.log(resp)
                })
                .catch((err) => {
                    console.log(err.response)
                })
        }
*/

/*      // TEST 5 AJOUT IMAGE - NON FONCTIONNEL
        onFileSelected(event) {
            this.image = event.target.files[0]
        },
        onUpluoad() {
            const id = localStorage.getItem('id');
            const fd = new FormData();
            fd.append('image', this.image, this.image.name)
            axios.post(`http://localhost:3000/api/users/${id}`, fd)
                .then(res => {
                    console.log(res)
                })
        }
*/

/*
        // TRY 4 AJOUT IMAGE - NON FONCTIONNEL
        onFileChange(event) {
            console.log(event)
            this.image = event.target.files[0]
        },
        updatePic (){  
            const userId = JSON.parse(localStorage.id);
            const token = localStorage.getItem('token')
            const header = {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };
            const fd = new FormData();
            fd.append('images', this.image)
            console.log(fd)
            axios.put(`http://localhost:3000/api/users/${userId}`,fd, header,)
            .then((response) => {
                console.log(response)
                this.image = null  
                location.reload()
            }).catch((err) => {
                console.log({err: err})
            })
        },
*/

   

/*
        // TRY 3 AJOUT IMAGE - NON FONCTIONNEL
        updatePic(event) {
            const id = this.$route.params.id;
            const image = event.target.files[0];
            const formData = new FormData();
            formData.append("image", image);
                axios({
                    method: "put",
                    url: `http://localhost:3000/api/users/${id}`,
                    data: formData,
                    headers: { "Content-Type": "application/json" },
                })
                    .then(() => {
                    this.getUserProfil();
                    })
                    .catch((e) => {
                    console.log(e);
                    });
                },
*/


/*
        // TRY 2 AJOUT IMAGE - NON FONCTIONNEL
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
            return;
            this.createImage(files[0]);
            },
        updatePic(file) {
            var reader = new FileReader();
            var vm = this;
            vm.image = new Image ();
            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
            },
            removeImage: function () {
            this.image = '';
            },
            postImage (id) {
                axios.put(`http://localhost:3000/api/users/${id}`, {
                imageUrl: this.image,
                })
                .then(function (response) {
                    if(response.status == 200) {
                        window.location.reload();
                    } else {
                        window.alert("Problème avec l'ajout de votre image.")
                    }
                })
            },
*/   

/*
            // TEST MODIFICATION IMAGE - NON FONCTIONNEL
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