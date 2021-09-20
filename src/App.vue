<template>
  <div id="app">

    <home></home>
    <login></login>

  </div>
</template>


<script>


  import Home from'./views/Home.vue'
  import Login from './views/Login.vue'

  export default {
    name: 'App',
    components: {
      'home': Home,
      'login': Login
    }
  }

</script> 



<style>

</style>
