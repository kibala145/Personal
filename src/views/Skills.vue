<template>
  <div class="skills">
    <h1>{{$t('views.skills.header')}}</h1>
    <div class="skills__list">
      <div
        v-for="(skill, $index) in skills"
        :key="$index"
        class="skills__list-item">
        <span class="skills__list-item-title">
          {{skill.title}}
        </span>
        <rating
          :total-value="10"
          :active-value="skill.level"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Rating from '@/components/Rating'
  // import CustomTransition from '@/components/helpers/CustomTransition'

  export default {
    name: 'Skills',
    components: {
      Rating,
      // CustomTransition
    },
    data() {
      return {
        skills: [
          {
            title: 'Vue.js',
            level: 8
          },
          {
            title: 'Javascript',
            level: 7
          },
          {
            title: 'HTML',
            level: 6
          },
          {
            title: 'CSS',
            level: 7
          },
          {
            title: 'Node.js',
            level: 5
          },
        ]
      }
    },
    methods: {
      styleWithDelay(order) {
        return {
          animation: `starsColor 2s ease-in 1 ${order * 2}s`
        }
      }
    }
  }
</script>

<style lang="scss">
  .star-icon {
    fill: #e8e8e8;
    &--active {
      fill: #DAA520;
      animation: starsColor 2s ease-in 1;
    }
  }

  @keyframes starsColor {
    0% {
      fill: #e8e8e8;
    }
  }
</style>
