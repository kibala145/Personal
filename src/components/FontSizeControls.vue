<template>
  <div class="font-size-controls">
    <button
      class="font-size-controls__button"
      @click="minus()"
    >
      <div class="font-size-controls__button-content">
        -
      </div>
    </button>
    <button
      class="font-size-controls__button"
      @click="plus()"
    >
      <div class="font-size-controls__button-content">
        +
      </div>
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &__button-content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    &__button {
      border: none;
      margin-right: .2rem;
      padding: 0;
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
