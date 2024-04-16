import { App } from 'vue';

export default {
  install(app:App) {
    const Storage = {
      get(key: string): any {
        if (window.localStorage) {
          return window.localStorage.getItem(`${process.env.VUE_APP_SITENAME}_${key}`);
        }
        return null;
      },
      set(key: string, value: any): any {
        if (window.localStorage) {
          return window.localStorage.setItem(`${process.env.VUE_APP_SITENAME}_${key}`, JSON.stringify(value));
        }
        console.warn('BROWSER NOT SUPPORT');
        return null;
      },
      delete(key: string): any {
        if (window.localStorage) {
          return window.localStorage.removeItem(`${process.env.VUE_APP_SITENAME}_${key}`);
        }
        return null;
      },
    };
    // const { config: { globalProperties } } = app;
    // globalProperties.$storage = Storage;
    app.provide('Storage', Storage);
  },
};
