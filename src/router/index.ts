import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../components/Login/index.vue';
import validateCode from '../components/Login/codeValidate.vue';

const beforeEnter = (_to: any, _from: any, next: any) => {
  const isAuthenticated = window.localStorage.getItem(`${process.env.VUE_APP_SITENAME}_token`);
  if (isAuthenticated) {
    if (_to.name === 'Login') {
      next({ name: 'home' });
      return;
    }
    next();
  } else {
    next({ name: 'Login' });
  }
};
const login = (_to: any, _from: any, next: any) => {
  const isAuthenticated = window.localStorage.getItem(`${process.env.VUE_APP_SITENAME}_token`);
  if (isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: login,
  },
  {
    path: '/validate-code',
    name: 'validate-code',
    component: validateCode,
    beforeEnter: login,
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/HomeView.vue'),
    beforeEnter,
    children: [
      {
        name: '/dashboard',
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue'),
        meta: {
          title: 'Dashboard',
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
