import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

const app = createApp(App);
app.use(router);
app.mount('#app');

import axios from 'axios'

axios.defaults.withCredentials = true;
app.config.globalProperties.$http = axios




