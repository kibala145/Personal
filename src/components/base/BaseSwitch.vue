<template>
  <div class="base-switch">
    <input
      :id="id"
      :checked="value"
      type="checkbox"
      class="base-switch__input"
      @change="$emit('update:value', $event.target.checked)"
    >
    <label
      :for="id"
      class="base-switch__slider">
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
      background-color: #2196F3;
    }
    &__input:checked + &__slider:before {
      transform: translateX(3rem);
    }
  }
</style>
