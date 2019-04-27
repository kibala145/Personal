import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
      component: () => import(/* webpackChunkName: "about" */ './views/Skills.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/learning',
      name: 'learning',
      component: () => import(/* webpackChunkName: "about" */ './views/Learning.vue')
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import(/* webpackChunkName: "playground" */ './views/Playground.vue')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0) //set timeout to 2x value of fade transition
    })
  }
})
