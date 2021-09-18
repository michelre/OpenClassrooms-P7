<template>
  
    <div class="header-top">
        <p>{{ titre }}</p>
    </div>

</template>




<script>

    export default {
        name: 'Header',
        data() {
            return {
                titre: 'Header Test'
            }
        }
    }

</script> 



<style>

    .header-top {
        position: fixed;
        top: 0;
        height: 50px;
        background: gray;
        color: white;
        width: 100%;
    }

</style>
