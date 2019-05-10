import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Skills from './views/Skills.vue'
import About from './views/About.vue'
import Playground from './views/Playground.vue'
import BaseSpinner from './components/base/BaseSpinner.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/learning',
      name: 'learning',
      component: () => import( './views/Learning.vue')
    },
    {
      path: '/playground',
      name: 'playground',
      component: Playground
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => ({
        // A component to use while the async component is loading
        loading: BaseSpinner,
        error: BaseSpinner,
        // The component to load (should be a Promise)
        component: new Promise(resolve => {
          setTimeout(() => {
            return import('./views/Todos.vue').then(data => resolve(data))
          }, 3000)
        }),
        // Delay before showing the loading component. Default: 200ms.
        delay: 200
      })
    },
  ],
  scrollBehavior: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0) //set timeout to 2x value of fade transition
    })
  }
});

export default router;
