import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; 
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import './index.css'
import { createPinia } from 'pinia';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(createPinia());
app.mount('#app');
