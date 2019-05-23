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
            'orange'
          ];

          return COLORS.indexOf(value) !== -1;
        }
      },
      round: {
        type: Boolean,
        default: false
      }
    },
    computed:{
      classObject() {
        return {
          round: this.round,
          blue: this.color === 'blue'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
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
      border-radius: 34px;
      &:before {
        border-radius: 50%;
      }
    }
  }
</style>
