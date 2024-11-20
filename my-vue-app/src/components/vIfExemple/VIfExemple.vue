<template>
  <div>
    <h1>Statut du Serveur</h1>
    <p v-if="serverOnline">Serveur en Ligne : {{ serverMessage }}</p>
    <p v-else>Serveur ne semble pas allumé.</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  data() {
    return {
      serverOnline: false,
      serverMessage: "",
    };
  },
  created() {
    this.checkServerStatus();
  },
  methods: {
    async checkServerStatus() {
      try {
        const response = await axios.get("http://localhost:3000/status");
        this.serverOnline = true;
        this.serverMessage = response.data.message;
      } catch (error) {
        this.serverOnline = false;
      }
    },
  },
};
</script>
