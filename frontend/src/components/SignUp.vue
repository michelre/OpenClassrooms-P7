<template>
    <section class="signup-container">

        <h1>Créer un compte</h1>

        <form class="form-card" v-on:submit.prevent="envoiForm">

            <div class="form-group">
                <label for="Nom">Nom</label>
                <input type="text" v-model="signUpForm.nom" name="nom" id="nom" class="form-input">
                <div class="form-err"></div>
            </div>
            <div class="form-group">
                <label for="prenom">Prénom</label>
                <input type="text" v-model="signUpForm.prenom" name="prenom" id="prenom" class="form-input">
                <div class="form-err"></div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" v-model="signUpForm.email" name="email" id="email" class="form-input">
                <div class="form-err"></div>
            </div>
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" v-model="signUpForm.password" name="password" id="password" class="form-input">
                <div class="form-err"></div>
            </div>
            <div class="form-group">
                <label for="passwordConfirm">Confirmez le mot de passe</label>
                <input type="password" v-model="signUpForm.passwordConfirm" name="passwordConfirm" id="passwordConfirm" class="form-input">
                <div class="form-err"></div>
            </div>
     

            <button class="form-btn">Se connecter</button>
        </form>

        <div class="sign-card">
            <p>Déjà inscrit ? <a href="" @click.prevent="changeForm(false)">Connectez-vous !</a></p>
        </div>

    </section>
</template>



<script>

    import axios from 'axios';

    export default {
        name: 'SignUp',
        components: {

        },
        props: {
            changeForm: Function 
        },
        data() {
            return {
                signUpForm:
                    {
                    nom: '',
                    prenom: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                    }
            }
        },
        methods: {

            envoiForm(){
                const nom = this.signUpForm.nom;
                const prenom = this.signUpForm.prenom;
                const email = this.signUpForm.email;
                const password = this.signUpForm.password;
                
                var formData = new FormData();
                    formData.append('prenom', prenom);
                    formData.append('nom', nom);
                    formData.append('email', email);
                    formData.append('password', password);
                    alert("utilisateur enregistré !");
                        axios({
                            method: "post",
                            url: "http://localhost:3000/api/users/signup",
                            data: this.signUpForm,
                            headers: { "Content-Type": "application/json" },
                            })
                        .then(reponse => { console.log(reponse)
                            this.$router.push({ name:'Wall' }); 
                    }); 

                   

            }
        }
    }



        












/*
            envoiForm() {
                let newUser = {
                    nom: this.signUpForm.nom,
                    prenom: this.signUpForm.prenom,
                    email: this.signUpForm.email,
                    password: this.signUpForm.password
                }; 
                this.$http.post('http://localhost:8080/api/' + "users", newUser)
                .then((res) => {
                if (res.status === 200) {
                    this.$http.post('http://localhost:8080/api/' + "users/login", newUser) 
                    .then((res) => {
                        if (res.status === 200) {
                        localStorage.setItem("currentUser", JSON.stringify(res.data));
                        this.$router.push({ name:'Wall' }); 
                        }
                    })
                    .catch(() => {
                        localStorage.clear();
                        this.error = "Un problème est survenu, veuillez réessayer";
                    });
                }
                })
                .catch((err) => {
                if (err.response.status === 409) {
                    this.error = "Adresse email déjà utilisée";
                } else {
                    this.error = "Un problème est survenu, veuillez réessayer";
                }
                });
            }

            envoiForm() {
                const nom = document.getElementById('#nom')[0].value;
                const prenom = document.getElementById('#prenom')[0].value;
                const email = document.getElementById('#email')[0].value;
                const password = document.getElementById('#password')[0].value;
                const passwordConfirm = document.getElementById('#passwordConfirm')[0].value;

                if (password === passwordConfirm) {
                    axios.post("http://localhost:8080/api/auth/signup", 
                    {
                        nom,
                        prenom,
                        email,
                        password,
                    },
    
                    {
                        header: {
                            "Content-Type": "application/json",
                        },
                    }
                    )
                    .then(() => {
                        alert("Bievenue parmi nous, vous êtes maintenant inscrit !")
                        this.$router.push({ name:'Wall' }); 
                    })

                    .catch (() => {
                        document.getElementsByClassName('form-err')[0].innerHTML = "Erreur, merci de bien respecter les prérequis d'inscription"
                    });
                } else if (password !== passwordConfirm) {
                    alert("Les mots de passe saisis ne sont pas identiques");
                }
            } 
    */



</script>



<style scoped>

    * {
        font-family: 'Titillium Web', sans-serif;
        background-color: white;
        border-radius: 5px;
    }

    .signup-container {
        padding: 0.5%;
    }

    h1 {
        text-align: center;
        font-size: 2em;
    }

    .form-card {
        margin-left: 5%;
        margin-right: 5%;
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

    .sign-card {
        font-style: italic;
        text-align: center;
    }

</style>