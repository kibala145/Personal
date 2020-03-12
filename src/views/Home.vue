<template>
  <div class="home">
    <h1>{{$t('views.home.header')}}</h1>
    <h2>{{$t('views.home.phrase')}}</h2>
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
