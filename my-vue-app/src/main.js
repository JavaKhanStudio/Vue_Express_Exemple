import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

import VueCookies from "vue-cookies";


const app = createApp(App);
app.use(router);
app.use(VueCookies);
app.mount('#app');

import axios from 'axios'

axios.defaults.withCredentials = true;
app.config.globalProperties.$http = axios




