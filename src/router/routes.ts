import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/SecondLayout.vue'),
    children:[
      { path: '/', component: () => import('pages/HomePage.vue') },
      { path: '/home', component: () => import('pages/HomePage.vue') },
      { path: '/menu', component: () => import('pages/MenuPage.vue') },
    ]
  },
  
  


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
