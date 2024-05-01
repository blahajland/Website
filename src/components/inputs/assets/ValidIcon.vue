<script setup>
import { IS_COLOR, IS_CSS_VAR, IS_PIXEL_SZ } from '@/assets/js/propsTools.js'

defineProps({
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
  <svg :width="size" :height="size" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_94_16)">
      <circle cx="16" cy="16" r="14.5" :stroke="color" stroke-width="3"/>
      <path d="M9 16L14 21L23 12" :stroke="color" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_94_16">
        <rect width="32" height="32" fill="white"/>
      </clipPath>
    </defs>
  </svg>


</template>