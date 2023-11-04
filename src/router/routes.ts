import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/SideLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      
      { path: 'menu', component: () => import('pages/MenuPage.vue') },
      { path: 'shopDish', component: () => import('pages/ShopMenuDish.vue') },
      { path: 'shopBeverage', component: () => import('pages/ShopMenuBeverage.vue') },
      { path: 'checkoutOrder', component: () => import('pages/CheckoutOrder.vue') },
      { path: 'menuTypology', component: () => import('pages/MenuTypology.vue') },
      { path: 'recapOrder', component: () => import('pages/RecapOrder.vue') },
      { path: 'api', component: () => import('pages/ProvaApi.vue') },

      {
        path: '/login',
        component: () => import('pages/LoginPage.vue')
      },
      {
        path: '/profile',
        component: () => import('pages/ProfilePage.vue')
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/SecondLayout.vue'),
    children:[{ path: 'home', component: () => import('pages/HomePage.vue') },]
  },
  
  


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
