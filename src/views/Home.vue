<template>
  <div class="home">
    <h1>Web developer from Kaliningrad, Russia</h1>
    <h2>Very passionate about learning</h2>
    <watches
      class="home__watches"
      :size="30" />
  </div>
</template>

<script>
import Watches from '@/components/Watches'

export default {
  name: 'home',
  components: {
    Watches
  }
}
</script>
