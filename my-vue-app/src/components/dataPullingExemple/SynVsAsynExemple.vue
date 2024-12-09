<template>
  <div class="container">
    <h1>Exemple de Données Synchrone et Asynchrone</h1>

    <!-- Synchronous Data -->
    <p><strong>Data Chargée au Chargement de la Page :</strong></p>
    <p v-if="syncData" class="data">{{ syncData }}</p>
    <p v-else class="loading">Chargement...</p>

    <!-- Button for Asynchronous Data -->
    <p><strong>Data Chargée au Clic :</strong></p>
    <p v-if="asyncData" class="data">{{ asyncData }}</p>
    <button @click="fetchAsyncData" class="button">Charger les Données</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      syncData: null,
      asyncData: null,
    };
  },
  created() {
    this.fetchSyncData();
  },
  methods: {
    async fetchSyncData() {
      try {
        const response = await axios.get("http://localhost:3000/sync");
        this.syncData = response.data.message;
      } catch (error) {
        this.syncData = "Erreur lors de la récupération des données synchrones.";
      }
    },
    async fetchAsyncData() {
      try {
        const response = await axios.get("http://localhost:3000/async");
        this.asyncData = response.data.message;
      } catch (error) {
        this.asyncData = "Erreur lors de la récupération des données asynchrones.";
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: var(--sub-background-color);
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: var(--text-color);
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.data {
  font-size: 1.2rem;
  color: var(--text-color);
  margin: 0.5rem 0;
}

.loading {
  font-size: 1.2rem;
  color: var(--secondary-color);
  font-style: italic;
  margin: 0.5rem 0;
}

.button {
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  color: white;
  background-color: var(--secondary-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: var(--primary-color);
}

.button:active {
  background-color: var(--error-color);
}
</style>
