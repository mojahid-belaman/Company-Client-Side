<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/signin">SignIn</router-link>
    <router-link to="/signup">SingUp</router-link> 
    <router-link to="/add-company">add company</router-link>
    <router-link to="/list-company">list company</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "ListCompany",
  components: {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
