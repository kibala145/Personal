<template>
  <div
    class="sidebar"
    :class="{'sidebar--open': sidebarOpen}"
  >
    <ul id="nav" class="sidebar__navigation navigation">
      <li v-for="link in links" :key="link.value">
        <router-link
          :to="link.value"
          class="navigation__link"
          :active-class="'navigation__link--active'"
          :exact-active-class="'navigation__link--active-exact'"
          exact
        >{{link.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  /* eslint-disable */
  // import ClickOutside from '@/directives/ClickOutside'
  import TransitionFade from '@/components/helpers/CustomTransition'

  export default {
    name: 'Sidebar',
    data() {
      return {
        links: [
          {
            title: 'Home',
            value: '/'
          },
          {
            title: 'Skills',
            value: '/skills'
          },
          {
            title: 'Learning',
            value: '/learning'
          },
          {
            title: 'About',
            value: '/about'
          },
          {
            title: 'Playground',
            value: '/playground'
          }
        ]
      }
    },
    components: {
      TransitionFade
    },
    /*directives: {
      ClickOutside
    },*/
    computed: {
      sidebarOpen() {
        return this.$store.state.sidebarOpen;
      }
    },
    methods: {
      closeSidebar() {
        this.$store.commit('SIDEBAR_CLOSE');
      }
    }
  }
</script>
