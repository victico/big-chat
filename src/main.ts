import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Storage from './plugins/Storage';
import firebase from './firebase';

createApp(App)
  .use(store)
  .use(router)
  .use(Storage)
  .mount('#app');
