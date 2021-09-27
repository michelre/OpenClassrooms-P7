<template>
    
        <div class="container">

            <HeaderWall/>

            <hr>
           

        <!-- Test bloc post (composant ?) -->
        <main class="main-wall">

        <section class="wall-card">
       
            <div class="post-card-header">
                <div class="post-header-pic"> 
                    <img src="../assets/witchKing.jpeg" width="50" class="post-header-pic-round">
                </div>
                <div class="post-header-name">
                    <p>Witch-King of Angmar</p>
                </div>
                <div class="post-header-date">
                    <p>27 septembre 2021</p>
                </div>
            </div>

            <div class="post-content">
                <div class="post-description">
                    <p class="post-txt">Do you not know death when you see it, old man?</p>
                </div>
                <div class="post-img">
                    <img src="../assets/Gandalf_vs_WitchKing.png" class="wall-img">
                </div>
                <div class="post-likes">
                    <i class="fas -regular fa-thumbs-up" id="wall-likes">18</i>
                </div>
            </div>

            <hr class="card-sep">
            <div class="post-actions">
                <div class="post-action-like">
                    <i class="fas -thin fa-thumbs-up"></i>
                    <span class="like-txt">J'aime</span>
                </div>
                <div class="post-action-comment">
                    <i class="fas -thin fa-message"></i>
                    <span class="comment-txt">Commenter</span>
                </div>
            </div>
            <hr class="card-sep">

            <div class="comment">
                <div class="comment-auth">
                    <img src="../assets/merry.jpg" width="40" class="comment-pic-round">
                <div class="comment-user"> 
                    <span class="comment-user-name">Merry</span> 
                    <p class="comment-text">C'mon Pippin !</p>
                </div>
            </div>

                <div class="comment-input">
                    <input type="text" class="form-control">
                        <div class="fonts">
                             <i class="fa fa-camera"></i> 
                        </div>
                </div>
            </div>

        </section>
    </main>




        </div>

</template>




<script>

    import HeaderWall from '../components/HeaderWall.vue'

    export default {
        name: 'Wall',
        components: {
            HeaderWall
        }
    }

</script>




<style scoped>

    hr {
        color: rgb(30, 51, 121);
    }

    .container {
        overflow: hidden;
        margin: 0;
    }

    .main-wall {
        margin-top: 5%;
        margin-bottom: 5%;
    }

    .wall-card {
        width: 50%;
        padding: 2%;
        margin: auto;
        box-shadow: 0 0 20px #000000b3;
        box-sizing: border-box;
        background: #f1f1f1;
        
    }

    .post-card-header {
        display: flex;
        align-items: center;
    
    }

    .post-header-pic-round {
    border-radius: 50% !important;
    height: 50px;
    width: 50px
    }

    .post-header-name {
        font-size: 1.1em;
        font-weight: bold;
        margin-left: 3%;
        
    }

    .post-header-date {
        color:gray;
        margin-left: 2%;
    }

    .post-content {
        margin: auto;
    }

    .wall-img {
        width: 100%;
    }

    .post-likes {
        margin-top: 3%;
        margin-bottom: 3%;
        margin-left: 10%;
    }

    #wall-likes {
        font-size: 1.5em;
    }

    .card-sep {
        margin-top: 3%;
        margin-bottom: 3%;
    }

    .post-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .post-action-like {
        margin-left: 25%;
    }

    .post-action-comment {
        margin-right: 25%;
    }


    .comment-auth {
        display: flex;
        flex-direction: row;
        margin-bottom: 2%;
    }

    .comment-user {
        display: flex;
        flex-direction: column;
        margin-left: 2%;
        padding: 1%;
        border-radius: 5px;
        background-color: rgb(219, 222, 226);
    }

    .comment-user-name {
        font-weight: bold;
        margin-left: 5%;
    
    }

    .comment-pic-round {
    border-radius: 50% !important;
    height: 50px;
    width: 50px;
    }

    .form-control {
    border-radius: 10px;
    width: 100%;
    margin-top: 2%;
    margin-bottom: 2%;
    height: 40px;
    }

    .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #8bbafe;
    outline: 0;
    box-shadow: none
}


</style>