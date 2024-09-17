import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/AppMore.vue';
import More from './components/AppEvenMore.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/more',
            name: 'More',
            component: More
        },
        {
            path: '/multi',
            name: 'Multi',
            component: () => import('./components/AppMulti.vue'),
            children: [
                {
                    path: '/sub1',
                    name: 'Sub1',
                    component: () => import('./components/subFolder/Sub1.vue'),
                },
                {
                    path: '/sub2',
                    name: 'Sub2',
                    component: () => import('./components/subFolder/Sub2.vue'),
                }
            ]
        },
        {
            path: '/elementInternalAndEmit',
            name: 'ElementInternalAndEmit',
            component: () => import('./components/emitExemple/ElementInternalAndEmit.vue'),
        },
        {
            path: '/vExempleContainer',
            name: 'VExempleContainer',
            component: () => import('./components/vForExemple/VExempleContainer.vue'),
        },
    ]
});

export default router;
