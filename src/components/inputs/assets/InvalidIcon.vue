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
    <g clip-path="url(#clip0_94_13)">
      <circle cx="16" cy="16" r="14.5" :stroke="color" stroke-width="3" />
      <path d="M10 10L22 22M22 10L10 22" :stroke="color" stroke-width="3" stroke-linecap="round" />
    </g>
    <defs>
      <clipPath id="clip0_94_13">
        <rect width="32px" height="32px" />
      </clipPath>
    </defs>
  </svg>

</template>