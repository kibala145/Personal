import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('./views/Skills.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
    {
      path: '/learning',
      name: 'learning',
      component: () => import( './views/Learning.vue')
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('./views/Playground.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('./views/Todos.vue')
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
