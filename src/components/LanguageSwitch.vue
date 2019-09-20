<template>
  <div class="language-switch">
    <icon-base
      width="2.4rem"
      height="2.4rem"
      class="language-switch__flag"
      :class="{'language-switch__flag--active': $i18n.locale === 'ru'}"
      icon-name="ru"
      @click="setLang('ru')"
    >
      <icon-russia-flag/>
    </icon-base>
    <icon-base
      width="2.4rem"
      height="2.4rem"
      class="language-switch__flag"
      :class="{'language-switch__flag--active': $i18n.locale === 'en'}"
      icon-name="en"
      @click="setLang('en')"
    >
      <icon-great-britain-flag/>
    </icon-base>
  </div>
</template>

<script>
  import IconBase from '@/components/icons/IconBase'
  import IconRussiaFlag from '@/components/icons/IconRussiaFlag'
  import IconGreatBritainFlag from '@/components/icons/IconGreatBritainFlag'

  export default {
    name: 'LanguageSwitch',
    data() {
      return {

      }
    },
    components: {
      IconBase,
      IconRussiaFlag,
      IconGreatBritainFlag
    },
    methods: {
      setLang(lang) {
        // this.$i18n.locale = lang;
        this.$store.dispatch('SET_LANG', lang)
      }
    }
  }
</script>

<style lang="scss">
  .language-switch {
    display: flex;
    &__flag {
      cursor: pointer;
      margin-left: .8rem;
      opacity: .33;
      &:first-child {
        margin-left: 0;
      }
      &:hover, &--active {
        opacity: 1;
      }
    }
  }
</style>
