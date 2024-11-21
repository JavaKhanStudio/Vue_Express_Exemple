<template>
  <div class="details-container">
    <h1>Page de détail</h1>
    <p>Path Variable utilisé : {{ id }}</p>
    <p v-if="param1">Query Param 1 : {{ param1 }}</p>
    <p v-if="param2">Query Param 2 : {{ param2 }}</p>
    <router-link to="/pathVariableAndParams">Retour à la page d'accueil</router-link>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const param1 = route.query.param1 || null;
    const param2 = route.query.param2 || null;

    return { id, param1, param2 };
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
  color: #007BFF;
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
  background-color: #4CAF50;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  text-align: center;
}

.details-container a:hover {
  background-color: #3e8e41;
}

.details-container a:focus {
  outline: 3px solid #3e8e41;
}
</style>
