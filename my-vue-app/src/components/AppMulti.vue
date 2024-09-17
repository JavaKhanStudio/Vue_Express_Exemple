<template>
    <div id="app" class="container">
      <div class="distant">Multi page</div>
      <nav>
        <ul class="distant">
          <li><router-link to="/Sub1">Sub_1</router-link></li>
          <li><router-link to="/Sub2">Sub_2</router-link></li>
        </ul>
      </nav>
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style scoped>
  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .distant {
    margin-right: 18px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>
  