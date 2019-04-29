<template>
  <div class="playground">
    <h1>Playground</h1>
    <h2>Pair element transitions: </h2>
    <span>Transition name:</span>
    <select v-model="paired.transitionName">
      <option value="fade">Fade</option>
      <option value="bounce">Bounce</option>
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
    <h2>Single element transitions: </h2>
    <h3>Note: this transition only works when target is a "block" typed element</h3>
    <span>Transition name:</span>
    <select v-model="single.transitionName">
      <option value="expand">Expand</option>
    </select>
    <br>
    <span>Transition mode:</span>
    <select v-model="single.transitionMode">
      <option value="out-in">Out-in</option>
      <option value="in-out">In-out</option>
    </select>
    <br>
    <base-switch
            :id="'checkboxSingle'"
            :value.sync="single.checked"
    />
    <custom-transition :transition-name="single.transitionName" :transition-mode="single.transitionMode">
      <div v-show="single.checked" :key="1">
        Checked
      </div>
    </custom-transition>
    <br>
    <base-switch
      :id="'exampleSwitch'"
      :value.sync="exampleSwitchValue"
    />
    {{exampleSwitchValue}}
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
        single: {
          checked: false,
          transitionName: 'expand',
          transitionMode: 'out-in'
        },
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
