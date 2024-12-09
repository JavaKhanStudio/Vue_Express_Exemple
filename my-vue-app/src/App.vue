<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/more">Simple Link</router-link></li>
        <li><router-link to="/condition">Condition</router-link></li>
        <li><router-link to="/multi">Multi</router-link></li>
        <li><router-link to="/pathVariableAndParams">Path and Params</router-link></li>
        <li><router-link to="/synVsAsyn">Data Loading</router-link></li>
        <li><router-link to="/cookieAndStorage">Cookie and Storage</router-link></li>
        <li><router-link to="/elementInternalAndEmit">Internal And Emit</router-link></li>
        <li><router-link to="/vExempleContainer">V List</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

main {
  flex: 1;
  overflow: auto;
  height: var(--main-size) ;
}

footer {
  height: var(--foooter-size) ;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--background-color);
}

nav {
  background-color: #007BFF;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: var(--header-size) ;
}

nav ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
  gap: 2px;
}

nav li {
  margin: 0;
}

nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-size: 1rem;
  padding: 4px;
  background-color: #0056b3;
  text-align: center;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border : 2px solid gray;
  transition: background-color 0.3s ease;
  font-family: "Montserrat", sans-serif;
}

nav a:hover {
  background-color: #003d80;
}

nav a.router-link-active {
  background-color: #003d80;
  font-weight: bold;
  text-decoration: underline;
  border: 4px inset red;
  padding: 0px;
}

</style>
