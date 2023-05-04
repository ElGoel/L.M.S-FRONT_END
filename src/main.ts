import { createApp } from 'vue';
import './scss/main.scss';
import App from './App.vue';
import store from './store';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

const VM = createApp(App);
VM.use(vuetify);
VM.use(store);
VM.mount('#app');
