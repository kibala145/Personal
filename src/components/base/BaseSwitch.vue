<template>
  <div
    :class="classObject"
    class="base-switch"
  >
    <input
      :id="id"
      :checked="value"
      type="checkbox"
      class="base-switch__input"
      @change="$emit('update:value', $event.target.checked)"
    >
    <label
      :for="id"
      tabindex="0"
      class="base-switch__slider"
    >
    </label>
  </div>
</template>

<script>
  export default {
    name: 'BaseSwitch',
    props: {
      value: {
        type: Boolean,
        required: true
      },
      id: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'orange',
        validator(value) {
          const COLORS = [
            'blue',
            'orange',
            'green'
          ];

          return COLORS.indexOf(value) !== -1;
        }
      },
      round: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'normal',
        validator(value) {
          const SIZES = [
            'normal',
            'small'
          ];

          return SIZES.indexOf(value) !== -1;
        }
      }
    },
    computed:{
      classObject() {
        return {
          round: this.round,
          blue: this.color === 'blue',
          green: this.color === 'green',
          small: this.size === 'small'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .base-switch.small {
    .base-switch__slider {
      height: 1.5rem;
      width: 3rem;
      &:before {
        height: 1.1rem;
        width: 1.1rem;
        left: .2rem;
        top: .2rem;
      }
    }
    .base-switch__input:checked + .base-switch__slider:before {
      transform: translateX(1.5rem);
    }
    .base-switch.round .base-switch__slider{
      border-radius: 1.7rem;
    }
  }
  .base-switch {
    position: relative;
    display: inline-flex;
    &__input {
      display: none;
    }
    &__slider {
      display: flex;
      flex-direction: row;
      height: 3rem;
      width: 6rem;

      cursor: pointer;
      background-color: #ccc;
      transition: .4s;


      &:before {
        position: absolute;
        content: "";
        height: 2.2rem;
        width: 2.2rem;
        left: .4rem;
        top: .4rem;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }
    }
    &__input:checked + &__slider {
      background-color: #ff9100;

    }
    &__input:checked + &__slider:before {
      transform: translateX(3rem);
    }
    //Additional classes
    &.blue &__input:checked + &__slider{
      background-color: #80d8ff;
    }
    &.round .base-switch__slider{
      border-radius: 3.4rem;
      &:before {
        border-radius: 50%;
      }
    }
    // green
    &.green &__input:checked + &__slider{
      background-color: green;
    }
    &.green &__input:checked + &__slider::before {
      background-color: rgb(44, 92, 52);
    }
  }
</style>
