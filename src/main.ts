import { createApp } from 'vue';
import './scss/main.scss';
import App from './App.vue';
import store from './store';
import '@mdi/font/css/materialdesignicons.css';

// Router
import router from './routes';

// Vuetify
import vuetify from './plugins/vuetify';

const VM = createApp(App);
VM.use(vuetify);
VM.use(store);
VM.use(router);
VM.mount('#app');
