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
    <!--<span class="header-bar__title">Personal header</span>-->
    <div class="header-bar__controls-container">
      <language-switch />
      <div class="header-bar__right-area">
        <dark-mode-controls />
        <font-size-controls />
      </div>
    </div>
  </div>
</template>

<script>
  import IconBase from '@/components/icons/IconBase'
  import IconHamburger from '@/components/icons/IconHamburger'
  import LanguageSwitch from '@/components/LanguageSwitch'
  import FontSizeControls from '@/components/FontSizeControls'
  import DarkModeControls from '@/components/DarkModeControls'

  export default {
    name: 'HeaderBar',
    components: {
      IconBase,
      IconHamburger,
      LanguageSwitch,
      FontSizeControls,
      DarkModeControls
    },
    methods: {
      openSidebar() {
        this.$store.commit('SIDEBAR_OPEN');
      }
    }
  }
</script>
