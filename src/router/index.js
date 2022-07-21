import { createRouter, createWebHashHistory  } from 'vue-router';
import Visualizer from '../views/Visualizer.vue';
import Settings from '../views/Settings.vue';

const routes = [
    { path: '/', component: Settings },
    { path: '/slides/:id', params: true, component: Visualizer },
];

const router = createRouter({
    history: createWebHashHistory (),
    routes
});

export default router;