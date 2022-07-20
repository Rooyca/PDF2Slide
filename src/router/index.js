import { createRouter, createWebHistory } from 'vue-router';
import Visualizer from '../views/Visualizer.vue';

const routes = [
    { path: '/', redirect: { name: 'settings' } },
    { path: '/settings', name: 'settings', component: () => import('../views/Settings.vue') },
    { path: '/slides/:id', params: true, component: Visualizer },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;