<template>
  <div id="app" class="layout">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/common/navbar.vue'
export default {
  name: 'App',
  mounted () {

  },
  components: {
    Navbar
  }
}
</script>

<style lang="less">
  #app {
    min-height: 100%;
    padding-top: .8rem;
  }
</style>
