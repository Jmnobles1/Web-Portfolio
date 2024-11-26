<template>
  <div class="app">
    <AppHeader/>
    <BodyComp/>
  </div>
  
</template>

<script>
import BodyComp from './components/BodyComp.vue'
import AppHeader from './component/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    BodyComp
  }
}
</script>

<style>
html, body, #app{
  margin:0;
  padding:0;
  width:100%;
  height:100%;
  box-sizing:border-box;
}
#app {
  display:flex;
  flex-direction:column;
  min-height:100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white; 
}
</style>
