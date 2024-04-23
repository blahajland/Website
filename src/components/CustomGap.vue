<script setup>
import { IS_PIXEL_SZ } from '@/assets/js/propsTools.js'

defineProps({
  gap: {
    required: true,
    type: String,
    validator(value) {
      return value === undefined || (value instanceof String && IS_PIXEL_SZ.test(value))
    }
  }
})
</script>

<template>
  <div class="CustomGap"></div>
</template>

<style>
.CustomGap {
  display: flex;
  height: v-bind(gap);
}
</style>
