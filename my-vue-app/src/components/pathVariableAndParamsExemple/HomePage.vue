<template>
  <div class="container">
    <h1>Page d'accueil</h1>
    <section>
      <div>
        <label for="param1">Paramètre 1 :</label>
        <input type="text" id="param1" v-model="param1" />
      </div>
      <div>
        <label for="param2">Paramètre 2 :</label>
        <input type="text" id="param2" v-model="param2" />
      </div>
    </section>

    <nav>
      <router-link
          v-for="id in buttons"
          :key="id"
          :to="buildLink(id)"
          class="button-link"
      >
        Bouton {{ id }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param1: '',
      param2: '',
      buttons: [1, 2, 3, "ninja", "popcorn"],
    };
  },
  methods: {
    buildLink(id) {
      const query = {};
      if (this.param1) query.param1 = this.param1;
      if (this.param2) query.param2 = this.param2;

      return { name: 'Detail', params: { id }, query };
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.container h1 {
  font-size: 2rem;
  color: #007BFF;
  margin-bottom: 1.5rem;
  text-align: center;
}

section {
  display : flex;

  justify-content: center;
  gap: 1rem;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.button-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  color: white;
  background-color: #007BFF;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.button-link:hover {
  background-color: #0056b3;
}

.button-link:focus {
  outline: 3px solid #0056b3;
}
</style>
