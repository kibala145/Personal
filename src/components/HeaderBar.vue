<template>
  <div
    class="header-bar"
    @click="$emit('header-click')"
  >
    <div class="header-bar__hamburger" @click.stop="openSidebar">
      <icon-base>
        <icon-hamburger/>
      </icon-base>
    </div>
    <span class="header-bar__title">Personal header</span>
  </div>
</template>

<script>
  import IconBase from '@/components/icons/IconBase'
  import IconHamburger from '@/components/icons/IconHamburger'

  export default {
    name: 'HeaderBar',
    components: {
      IconBase,
      IconHamburger
    },
    methods: {
      openSidebar() {
        this.$store.commit('SIDEBAR_OPEN');
      }
    }
  }
</script>
