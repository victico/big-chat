import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Storage from './plugins/Storage';

createApp(App)
  .use(store)
  .use(router)
  .use(Storage)
  .mount('#app');
