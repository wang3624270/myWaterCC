import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage';
import Framepage from '@/components/framepage';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/index',
            name: 'framepage',
            component: Framepage
        },

    ]
})
