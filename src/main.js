import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

Vue.config.productionTip = false;

const app = new Vue({
  data() {
    return {
      loading: false
    }
  },
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  app.loading = true
  next()
})

router.afterEach(() => {
  app.loading = false
  // setTimeout(() => app.loading = false, 1500) // timeout for demo purposes
})
