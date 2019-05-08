<template>
  <div id="app" v-swipe.right="sidebarOpen" v-swipe.left="sidebarClose">
    <header-bar @header-click="pageClickHandler"/>
    <sidebar/>
    <div class="page-content" @click="pageClickHandler">
      <custom-transition transition-name="fade">
        <router-view/>
      </custom-transition>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles/index";
</style>

<script>
  import store from './store/store'
  import HeaderBar from '@/components/HeaderBar'
  import Sidebar from '@/components/Sidebar'
  import Swipe from '@/directives/Swipe'
  import CustomTransition from '@/components/helpers/CustomTransition'

  export default {
    store,
    components: {
      Sidebar,
      HeaderBar,
      CustomTransition
    },
    directives: {
      Swipe
    },
    methods: {
      sidebarClose() {
        this.$store.commit('SIDEBAR_CLOSE');
      },
      sidebarOpen() {
        this.$store.commit('SIDEBAR_OPEN');
      },
      pageClickHandler(e) {
        if (this.$store.state.sidebarOpen) {
          this.sidebarClose();
          e.preventDefault();
        }
      }
    }
  }
</script>
