<template>
  <div>
    <h1>Exemple de Données Synchrone et Asynchrone</h1>

    <!-- Synchronous Data -->
    <p><strong>Data Chargée au Chargement de la Page :</strong></p>
    <p v-if="syncData">{{ syncData }}</p>
    <p v-else>Chargement...</p>

    <!-- Button for Asynchronous Data -->
    <p><strong>Data Chargée au Clic :</strong></p>
    <p v-if="asyncData">{{ asyncData }}</p>
    <button @click="fetchAsyncData">Charger les Données</button>
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
    // Fetch synchronous data (called on page load)
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
