<template>
  <div
    class="header-bar"
    @click="$emit('header-click')"
  >
    <icon-base class="header-bar__hamburger" @click="openSidebar">
      <icon-hamburger></icon-hamburger>
    </icon-base>
    <span class="header-bar__title">Personal header</span>
  </div>
</template>

<script>
  import IconBase from '@/components/icons/IconBase'
  import IconHamburger from '@/components/icons/IconHamburger'
  import Sidebar from '@/helpers/Sidebar'

  export default {
    name: 'HeaderBar',
    components: {
      IconBase,
      IconHamburger
    },
    methods: {
      openSidebar: Sidebar.open
    }
  }
</script>
