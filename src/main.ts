import { createApp } from 'vue';
import './scss/main.scss';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
