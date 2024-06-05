<script setup lang="ts">
import type { PropType } from 'vue'
import type { PixelSize } from 'blahaj-library'

defineProps({
  gap: {
    type: String as PropType<PixelSize>,
    required: true
  }
})
</script>

<template>
  <div class="CustomGap"></div>
</template>

<style lang="sass">
.CustomGap
  height: v-bind(gap)
  flex: 0 0 v-bind(gap)
</style>
