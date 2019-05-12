<template>
  <div class="playground">
    <h1>Playground</h1>
    <h2>Pair element transitions: </h2>
    <span>Transition name:</span>
    <select v-model="paired.transitionName">
      <option value="fade">Fade</option>
      <option value="bounce">Bounce</option>
      <option value="expand">Expand</option>
    </select>
    <br>
    <span>Transition mode:</span>
    <select v-model="paired.transitionMode">
      <option value="out-in">Out-in</option>
      <option value="in-out">In-out</option>
    </select>
    <br>
    <base-switch
      :id="'checkboxPaired'"
      :value.sync="paired.checked"
    />
    <custom-transition :transition-name="paired.transitionName" :transition-mode="paired.transitionMode">
      <div v-if="paired.checked" :key="1">
        Checked
      </div>
      <div v-if="!paired.checked" :key="2">
        Not checked
      </div>
    </custom-transition>
  </div>
</template>

<script>
  import CustomTransition from '@/components/helpers/CustomTransition'
  import BaseSwitch from '@/components/base/BaseSwitch'

  /*import IconBase from '@/components/icons/IconBase'
  import IconRisha from '@/components/icons/IconRisha'*/

  export default {
    name: 'Playground',
    data() {
      return {
        paired: {
          checked: false,
          transitionName: 'fade',
          transitionMode: 'out-in'
        },
        exampleSwitchValue: false,
      }
    },
    components: {
      CustomTransition,
        BaseSwitch,
      /*IconRisha,
      IconBase*/
    }
  }
</script>
