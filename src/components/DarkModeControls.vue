<template>
  <base-switch
    id="night-mode-switch"
    :value="darkMode"
    @update:value="SET_DARK_MODE"
    color="orange"
    size="small"
  />
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import BaseSwitch from '@/components/base/BaseSwitch'

export default {
  name: 'DarkModeControls',
  computed: {
    ...mapState({
      darkMode: state => state.darkMode
    })
  },
  methods: {
    ...mapMutations(['SET_DARK_MODE'])
  },
  components: {
    BaseSwitch
  }
}
</script>