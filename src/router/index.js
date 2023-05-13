import { createRouter, createWebHistory  } from 'vue-router';
import Visualizer from '../views/Visualizer.vue';
import Settings from '../views/Settings.vue';
import Delete from '../views/Delete.vue';

const routes = [
    { path: '/', name: 'home', component: Settings },
    { path: '/slides/:id', params: true, component: Visualizer },
    { path: '/del/:id/:key', params: true, component: Delete },
];

const router = createRouter({
    history: createWebHistory (),
    routes
});

export default router;