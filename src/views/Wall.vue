<template>
    
        <div class="container">

            <HeaderWall/>

            <hr>
            <div>test</div>
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

</style>