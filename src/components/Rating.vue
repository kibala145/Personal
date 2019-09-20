<template>
  <div class="rating">
    <icon-base
      v-for="index in totalValue"
      :key="index"
      :icon-name="$t('star')"
      class="star-icon"
      :class="{'star-icon--active': index <= activeValue}"
      width="1.8rem"
      height="1.8rem"
    >
      <icon-star></icon-star>
    </icon-base>
  </div>
</template>

<script>
  import IconBase from '@/components/icons/IconBase'
  import IconStar from '@/components/icons/IconStar'
  // import TransitionFade from '@/components/helpers/TransitionFade'

  export default {
    name: 'Rating',
    components: {
      IconStar,
      IconBase,
      // TransitionFade
    },
    props: {
      totalValue: {
        type: Number,
        default: 10
      },
      activeValue: {
        type: Number,
        default: 0
      }
    }
  }
</script>
