<template>
  <div class="font-size-controls">
    <button
      class="font-size-controls__button"
      @click="minus()"
    >
      -
    </button>
    <button
      class="font-size-controls__button"
      @click="plus()"
    >
      +
    </button>
  </div>
</template>

<script>
  export default {
    name: 'FontSizeControls',
    data() {
      return {
        root: document.querySelector('html')
      }
    },
    methods: {
      plus() {
        const fontSize = parseFloat(window.getComputedStyle(this.root, null).getPropertyValue('font-size'));
        this.root.style.fontSize = `${fontSize + 1}px`;
      },
      minus() {
        const fontSize = parseFloat(window.getComputedStyle(this.root, null).getPropertyValue('font-size'));
        this.root.style.fontSize = `${fontSize - 1}px`;
      }
    },
    created() {
      // this.root = document.querySelector('html');
    }
  }
</script>

<style lang="scss" scoped>
  .font-size-controls {
    &__button {
      border: none;
      margin-right: .2rem;
      &:last-child {
        margin-right: 0;
      }
      font-size: 1.2rem;
      height: 1.5rem;
      width: 1.5rem;
      cursor: pointer;
    }
  }
</style>
