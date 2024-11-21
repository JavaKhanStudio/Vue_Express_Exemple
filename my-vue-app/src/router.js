import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import More from './components/AppEvenMore.vue';
import Condition from './components/vIfExemple/VIfExemple.vue';
import SynVsAsyn from './components/dataPullingExemple/SynVsAsynExemple.vue';



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
            path: '/pathVariableAndParams',
            name: 'PathVariableAndParams',
            component: () => import('./components/pathVariableAndParams/HomePage.vue'),
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: () => import('./components/pathVariableAndParams/DetailsPage.vue'),
        },
        {
            path: '/condition',
            name: 'Condition',
            component: Condition
        },
        {
            path: '/synVsAsyn',
            name: 'SynVsAsyn',
            component: SynVsAsyn
        },
        {
            path: '/cookieAndStorage',
            name: 'CookieAndStorage',
            component: () => import('./components/cookiesAndStorage/CookieAndStorageExemple.vue'),
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
