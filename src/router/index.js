import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    }
  ]
})
