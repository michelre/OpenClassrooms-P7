<template>
    <div class="container">

        <header>
            <nav>
                <a href="" title="" class="logo-header">
                    <img src="../assets/icon-groupo-left.png" alt="" class="logo-img">
                </a>

                <ul>
                    <li>
                        <a href="" class="nav-login">S'identifier</a>
                    </li>
                    <li>
                        <a href="" class="nav-signin">S'incrire</a>
                    </li>
                </ul>
            </nav>
        </header>

        <div class="hero">
            <div class="hero-content">
                <img alt="" src="../assets/bckg-pic.jpg"/>
            </div>
        </div>

    </div>
</template>




<script>
    export default {
        data() {
            return {
                txt: 'Essai texte'
            }
        }
    }
</script>




<style scoped>
   
    .container {
        overflow: hidden;
        height: 700px;
    }

    img {
        opacity: 0.5;
    }

    header {
        height: 80px;
        padding-left: 5%;
        padding-right: 5%;
    }

    nav {
        width: 50%;
        display: flex;
        margin: auto;
        justify-content: space-between;
    }

    .logo-img {
        width: 90px;
    }

    ul {
        display: flex;
        padding-top: 3%;
        text-decoration: none;
    }

    li {
        list-style-type: none;
        margin-right: 25%;
        
    }

    a, a:hover, a:visited, a:active
        {
            color:#000;
            text-decoration:none;
        }




</style>