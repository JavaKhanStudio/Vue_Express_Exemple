<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/more">More</router-link></li>
        <li><router-link to="/multi">Multi</router-link></li>
        <li><router-link to="/elementInternalAndEmit">Internal And emit</router-link></li>
        <li><router-link to="/vExempleContainer">V List</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    
  }
}
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  font-size: 30px;
}

li{
  padding-left: 10px;
  padding-right: 10px;
}
</style>
