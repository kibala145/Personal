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
       /* links: [
          {
            title: this.$t('home'),
            value: '/'
          },
          {
            title: this.$t('skills'),
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
          },
          {
            title: 'Todos',
            value: '/todos'
          }
        ]*/
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
      },
      links() {
        return [
          {
            title: this.$t('home'),
            value: '/'
          },
          {
            title: this.$t('skills'),
            value: '/skills'
          },
          {
            title: this.$t('learning'),
            value: '/learning'
          },
          {
            title: this.$t('about'),
            value: '/about'
          },
          {
            title: this.$t('playground'),
            value: '/playground'
          },
          {
            title: this.$t('todos'),
            value: '/todos'
          },
          {
            title: this.$t('blog'),
            value: '/blog'
          }
        ]
      }
    },
    methods: {
      closeSidebar() {
        this.$store.commit('SIDEBAR_CLOSE');
      }
    }
  }
</script>
