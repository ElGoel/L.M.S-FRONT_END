import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    meta: {},
  },
  {
    path: '/dashboard',
    meta: {
      requiresAuth: true,
      layout: 'ui',
    },
    component: () => import('@/views/pages/DashBoard.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () =>
      import(/* webpackChunkName: "error" */ '@/views/errors/NotFoundPage.vue'),
  },
  {
    path: '/ganado',
    component: () => import('@/views/datatable/EditTablePage.vue'),
    meta: {
      requiresAuth: true,
      layout: 'ui',
      category: 'Data',
      title: 'TablaGanado',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
