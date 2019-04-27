<!--<template>
  <transition name="fade" appear mode="out-in">
    <slot></slot>
  </transition>
</template>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>-->


<script>
  export default {
    name: 'CustomTransition',
    functional: true,
    props: {
      transitionName: {
        type: String,
        default: () => 'expand'
      },
      transitionMode: {
        type: String,
        default: () => 'out-in'
      }
    },
    render(createElement, context) {
      // the data that our wrap component needed
      // in transition element case, data contains transition event handlers to manipulate styles
      const data = {};

      data.props = {
        mode: context.props.transitionMode,
        name: context.props.transitionName
      };

      switch (context.props.transitionName) {
        case 'expand':
          data.on = {
            afterEnter(element) {
              element.style.height = 'auto';
            },
            enter(element) {
              const width = getComputedStyle(element).width;

              element.style.width = width;
              element.style.position = 'absolute';
              element.style.visibility = 'hidden';
              element.style.height = 'auto';

              const height = getComputedStyle(element).height;

              element.style.width = null;
              element.style.position = null;
              element.style.visibility = null;
              element.style.height = 0;

              /*Force repaint to make sure the
                 animation is triggered correctly. */
              getComputedStyle(element).height;

              setTimeout(() => {
                element.style.height = height;
              });
            },
            leave(element) {
              const heigth = getComputedStyle(element).height;

              element.style.height = heigth;
              /*Force repaint to make sure the
                 animation is triggered correctly. */
              getComputedStyle(element).height;

              setTimeout(() => {
                element.style.height = 0;
              });
            },/*
            afterLeave(element) {
              element.style.height = 'auto';
            },*/
          };
          break
      }


      return createElement('transition', data, context.children);
    }
  }
</script>

<style scoped>
  * {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
</style>

<style lang="scss">
  .expand-enter-active,
  .expand-leave-active {
    transition: height .3s ease-in-out;
    overflow: hidden;
  }

  .expand-enter,
  .expand-leave-to {
    height: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s linear;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .bounce-enter-active {
    transform-origin: 0 0;
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    transform-origin: 0 0;
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
