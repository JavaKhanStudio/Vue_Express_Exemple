<template>
  <div>
    <h1>Cookies et VueCookies</h1>
    <label for="name">Entrez votre nom :</label>
    <input type="text" id="name" v-model="name" placeholder="Votre nom" />

    <button @click="saveName">Enregistrer le nom</button>
    <button @click="clearAll">Effacer tout</button>

    <h2 v-if="greeting">{{ greeting }}</h2>
    <h2 v-else>Aucun message disponible.</h2>

    <p v-if="cookieExpiresIn >= 0">
      Le cookie expire dans : {{ cookieExpiresIn }} secondes
    </p>
    <p v-else>
      Votre cookie n'est plus valide. Veuillez enregistrer le nom à nouveau.
    </p>

    <button @click="callBackend">Appeler le backend</button>
    <p v-if="backendResponse">Réponse du backend : {{ backendResponse }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      greeting: null,
      cookieExpiresIn: -1,
      backendResponse: null,
    };
  },
  created() {
    this.loadStoredName();
    this.startCookieTimer();
  },
  methods: {
    saveName() {
      if (this.name) {
        localStorage.setItem("userName", this.name);

        const expiresAt = new Date().getTime() + 10000;
        this.$cookies.set("greeting", `Bonjour, ${this.name}!`, "10s");
        localStorage.setItem("cookieExpiresAt", expiresAt);
        this.startCookieTimer();
        this.loadGreeting();
      }
    },
    clearAll() {
      localStorage.removeItem("userName");
      localStorage.removeItem("cookieExpiresAt");
      this.$cookies.remove("greeting");
      this.name = "";
      this.greeting = null;
      this.cookieExpiresIn = -1;
    },
    callBackend() {
      axios
          .get("http://localhost:3000/verify-cookie", {
            withCredentials: true,
          })
          .then((response) => {
            this.backendResponse = response.data.message;
          })
          .catch((error) => {
            this.backendResponse = error.response.data.message;
          });
    },
    loadStoredName() {
      this.name = localStorage.getItem("userName") || "";
      this.loadGreeting();
    },
    loadGreeting() {
      this.greeting = this.$cookies.get("greeting");
    },
    startCookieTimer() {
      const expiresAt = localStorage.getItem("cookieExpiresAt");
      if (expiresAt) {
        const interval = setInterval(() => {
          const secondsLeft = Math.floor((expiresAt - new Date().getTime()) / 1000);
          if (secondsLeft <= 0) {
            clearInterval(interval);
            this.cookieExpiresIn = -1;
          } else {
            this.cookieExpiresIn = secondsLeft;
          }
        }, 1000);
      }
    },
  },
};
</script>
