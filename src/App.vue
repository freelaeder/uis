<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/layout">layout</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/container">container布局</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style lang='less'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-right: 10px;
  a {
    margin-right: 10px;
  }
}
</style>
