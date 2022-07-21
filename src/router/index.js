import { createRouter, createWebHistory } from 'vue-router';
import Visualizer from '../views/Visualizer.vue';
import Settings from '../views/Settings.vue';

const routes = [
    { path: '/', redirect: { name: 'settings' } },
    { path: '/settings', name: 'settings', component: Settings },
    { path: '/slides/:id', params: true, component: Visualizer },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;