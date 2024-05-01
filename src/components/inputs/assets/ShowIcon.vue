<script setup>
import { IS_COLOR, IS_CSS_VAR, IS_PIXEL_SZ } from '@/assets/js/propsTools.js'

defineProps({
  isShown: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: '32px',
    validator(value) {
      return IS_PIXEL_SZ.test(value)
    }
  },
  color: {
    type: String,
    default: '#000000',
    validator(value) {
      return IS_COLOR.test(value) || IS_CSS_VAR.test(value)
    }
  }
})
</script>

<template>

  <svg v-if="isShown" :width="size" :height="size" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.8263 14.8098C30.0765 15.2973 30.2615 15.7063 30.3864 16C30.2615 16.2937 30.0765 16.7027 29.8263 17.1902C29.2865 18.2421 28.4529 19.6413 27.2811 21.0344C24.943 23.8138 21.3284 26.5 16 26.5C10.6716 26.5 7.05704 23.8138 4.71893 21.0344C3.54706 19.6413 2.71352 18.2421 2.17369 17.1902C1.92352 16.7027 1.73847 16.2937 1.6136 16C1.73847 15.7063 1.92352 15.2973 2.17369 14.8098C2.71352 13.7579 3.54706 12.3587 4.71893 10.9656C7.05704 8.18622 10.6716 5.5 16 5.5C21.3284 5.5 24.943 8.18622 27.2811 10.9656C28.4529 12.3587 29.2865 13.7579 29.8263 14.8098Z"
      :stroke="color" stroke-width="3" stroke-linejoin="round" />
    <path d="M20.2439 17.5C19.6262 19.2478 17.9593 20.5 16 20.5C14.0407 20.5 12.3738 19.2478 11.7561 17.5H20.2439Z"
          :stroke="color" stroke-width="3" />

    <path d="M30 16H2" :stroke="color" stroke-width="3" stroke-linejoin="round" />
  </svg>
  <svg v-else :width="size" :height="size" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.8263 14.8098C30.0765 15.2973 30.2615 15.7063 30.3864 16C30.2615 16.2937 30.0765 16.7027 29.8263 17.1902C29.2865 18.2421 28.4529 19.6413 27.2811 21.0344C24.943 23.8138 21.3284 26.5 16 26.5C10.6716 26.5 7.05704 23.8138 4.71893 21.0344C3.54706 19.6413 2.71352 18.2421 2.17369 17.1902C1.92352 16.7027 1.73847 16.2937 1.6136 16C1.73847 15.7063 1.92352 15.2973 2.17369 14.8098C2.71352 13.7579 3.54706 12.3587 4.71893 10.9656C7.05704 8.18622 10.6716 5.5 16 5.5C21.3284 5.5 24.943 8.18622 27.2811 10.9656C28.4529 12.3587 29.2865 13.7579 29.8263 14.8098Z"
      :stroke="color" stroke-width="3" stroke-linejoin="round" />
    <circle cx="16" cy="16" r="4.5" :stroke="color" stroke-width="3" />
  </svg>


</template>

<style scoped lang="sass">

</style>