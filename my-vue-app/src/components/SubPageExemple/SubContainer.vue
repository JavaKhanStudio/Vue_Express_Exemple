<template>
    <div id="app" class="container">
      <header>
        <h1>Multi-Page Application</h1>
      </header>
      <nav>
        <ul class="distant">
          <li><router-link to="/Sub1">Sub 1</router-link></li>
          <li><router-link to="/Sub2">Sub 2</router-link></li>
          <li><router-link to="/Sub3">Sub 3 (Brise le CSS)</router-link></li>
          <li><router-link to="/Sub4">Sub 4 (Pas dans le router)</router-link></li>
        </ul>
      </nav>
      <main class="sub-view">
        <router-view />
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
  color: #333;
}

/* Header */
header {
  text-align: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #4CAF50;
  color: white;
  width: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

header h1 {
  margin: 0;
  font-size: 2rem;
}

nav {
  background-color: #007BFF;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 90%;
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
}

nav a.router-link-active {
  background-color: #003d80;
  font-weight: bold;
  text-decoration: underline;
  border: 4px inset red;
  padding: 0px;
}

/* Sub-View Area */
.sub-view {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  min-height: 40vh;
}

.sub-view > * {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
}
</style>
