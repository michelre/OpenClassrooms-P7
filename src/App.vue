<template>
  <div id="app">

    <header-top></header-top>
    <home></home>

  </div>
</template>


<script>

  import Header from './components/Header.vue'
  import Home from'./views/Home.vue'

  export default {
    name: 'App',
    components: {
      'home': Home,
      'header-top': Header
    }
  }

</script> 



<style>

</style>
