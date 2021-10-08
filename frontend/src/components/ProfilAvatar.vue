<template>
    
    <section class="container-avatar">

        <div class="main-avatar">
            <input
                type="file"
                accept="image/*"
                class="hidden"
                ref="file"
                @change="change"
            />
            <img :src="src" alt="Avatar" class="avatar-img" />
            <div class="avatar-btn-contain">
                <button
                    type="button"
                    @click="browse()"
                    class="avatar-btn"
                >
                    <i class="fas fa-ellipsis-v"></i>
                </button>
            </div>
        </div>

    </section>

</template>



<script>

    export default {
        name: 'ProfilAvatar',
   
        props: {
            value: File,
            defaultSrc: String,
        },
        watch: {
            value(file) {
            if (!file) {
                this.src = this.defaultSrc;
                this.$refs.file.value = "";
            } else {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                this.src = e.target.result;
                };
            }
            },
        },
        data() {
            return {
            src: this.defaultSrc,
            };
        },
        methods: {
            browse() {
            this.$refs.file.click();
            },
            remove() {
            this.$emit("input", null);
            },
            change(e) {
            this.$emit("input", e.target.files[0]);
            },
        },
    }

</script>



<style scoped>

    .container-avatar {
        width: 30%;
        height: 30%;
        margin-top: 5%;
        margin-bottom: 5%;
        border: 3px solid red;
        margin: auto;
    }

    .main-avatar {
        position: relative;
        display: inline-block;
        overflow: hidden;
    }

    .avatar-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .avatar-btn-contain {
        top: 0;
        height: 100%;
        width: 100%;
        background: black;
        opacity: 0.2;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .avatar-btn {
        border-radius: 99px;
        color: white;
        transition-duration: 200;
    }

    .avatar-btn:hover {
        background-color: white;
        opacity: 2;
    }

    .avatar-btn:focus {
        outline: none;
    }

    i {
        height: 56px;
        width: 56px;
    }

  

</style>
