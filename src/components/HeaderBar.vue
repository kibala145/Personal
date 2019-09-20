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
    <language-switch />
    <font-size-controls />
  </div>
</template>

<script>
  import IconBase from '@/components/icons/IconBase'
  import IconHamburger from '@/components/icons/IconHamburger'
  import LanguageSwitch from '@/components/LanguageSwitch'
  import FontSizeControls from '@/components/FontSizeControls'

  export default {
    name: 'HeaderBar',
    components: {
      IconBase,
      IconHamburger,
      LanguageSwitch,
      FontSizeControls
    },
    methods: {
      openSidebar() {
        this.$store.commit('SIDEBAR_OPEN');
      }
    }
  }
</script>
