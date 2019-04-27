<template>
  <div
    :style="{height: `${size}rem`, width: `${size}rem`}"
    class="watches">
    <div class="watches__background">
      <div v-for="i in 12"
           :key="i"
           class="watches__point"
           :class="`watches__point-${i}`">{{i}}</div>
      <div class="watches__center"></div>
      <div :style="hoursStyle" class="watches__hand watches__hour-hand"></div>
      <div :style="minutesStyle" class="watches__hand watches__minute-hand"></div>
      <div :style="secondsStyle" class="watches__hand watches__second-hand"></div>
    </div>
    <div
      v-if="dateTimeFormatted"
      class="watches__formatted">
      {{ dateDisplayed }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Watches',
    props: {
      dateTimeFormatted: {
        type: Boolean,
        default: false
      },
      size: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        hours: null,
        minutes: null,
        seconds: null,
        dateDisplayed: null
      }
    },
    computed: {
      hoursStyle() {
        return {
          transform: `translate(-50%, 0) rotateZ(${this.hours + 180}deg)`
        }
      },
      minutesStyle() {
        return {
          transform: `translate(-50%, 0) rotateZ(${this.minutes + 180}deg)`
        }
      },
      secondsStyle() {
        return {
          transform: `translate(-50%, 0) rotateZ(${this.seconds + 180}deg)`
        }
      },
    },
    methods: {
      formatDate(d) {
        return ("0" + d.getDate()).slice(-2) + "." + ("0"+(d.getMonth()+1)).slice(-2) + "." +
          d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2)
      },
      tickHandler() {
        let now = new Date(),
          time = now.getHours() * 3600 +
            now.getMinutes() * 60 +
            now.getSeconds() * 1 +
            now.getMilliseconds() / 1000;

        this.hours = time / 60 / 12 * 6
        this.minutes = time / 60 * 6;
        this.seconds = time * 6;

        this.dateDisplayed = this.formatDate(now);
      }
    },
    mounted() {
      this.tickHandler();
      setInterval(this.tickHandler, 1000);
    }
  }
</script>

<style lang="scss">
  .watches__point {
    display: none;
  }
  /*.watches__point-12 {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }
  .watches__point-6 {
    display: block;
    position: absolute;
    bottom: 0;
    transform: translate(-50%);
    left: 50%;
  }
  .watches__point-3 {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
  }
  .watches__point-9 {
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
  }*/
</style>
