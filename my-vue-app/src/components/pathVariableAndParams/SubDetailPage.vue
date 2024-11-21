<template>
  <div class="details-container">
    <h1>Page Sub Détail</h1>
    <p>Path Variable utilisé : {{ id }}</p>
    <p>Second Path Variable utilisé : {{ subId }}</p>
    <router-link :to="{ name: 'Detail', params: { id } }">Retour à la page de détail</router-link>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const id = route.params.id;
    const subId = route.params.subId;

    return { id, subId };
  },
};
</script>

<style scoped>
.details-container {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.details-container h1 {
  font-size: 2rem;
  color: #FF5733;
  margin-bottom: 1.5rem;
  text-align: center;
}

.details-container p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0.5rem 0;
  color: #555;
  text-align: center;
}

.details-container a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  background-color: #007BFF;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  text-align: center;
}

.details-container a:hover {
  background-color: #0056b3;
}

.details-container a:focus {
  outline: 3px solid #0056b3;
}
</style>
