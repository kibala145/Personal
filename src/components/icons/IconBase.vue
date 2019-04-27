<!--All icons should have viewbox 18x18-->
<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 18 18"
       :aria-labelledby="iconName"
       role="presentation"
       @click="$emit('click')"
  >
    <title
      :id="iconName"
    >{{ iconName }}</title>
    <g>
      <slot />
    </g>
  </svg>
</template>

<script>
  export default {
    props: {
      iconName: {
        type: String,
        default: 'box'
      },
      width: {
        type: [Number, String],
        default: 18
      },
      height: {
        type: [Number, String],
        default: 18
      },
      /*iconColor: {
        type: String,
        default: 'currentColor'
      }*/
    }
  }
</script>
