import { createRouter, createWebHistory } from 'vue-router';
import CategoryView from '../views/CategoryView.vue';

const routes = [
  {
    path: '/:category',
    name: 'Category',
    component: CategoryView,
    props: true,
    // Agregar key basada en la categoría para forzar la actualización
    key: (route) => route.params.category,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
