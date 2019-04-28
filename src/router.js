import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Skills from './views/Skills.vue'
import About from './views/About.vue'
import Playground from './views/Playground.vue'

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
      component: () => import(/* webpackChunkName: "about" */ './views/Learning.vue')
    },
    {
      path: '/playground',
      name: 'playground',
      component: Playground
    },
  ],
  scrollBehavior () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0) //set timeout to 2x value of fade transition
    })
  }
})
