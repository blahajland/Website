<script setup lang="ts">
import { isValidColorName } from '@/library/ts/common-tools'
import type { PropType } from 'vue'
import type { PixelSize } from '@/library/ts/common-types'

defineProps({
  font: {
    type: String,
    validator: isValidColorName,
    default: '#101010'
  },
  gap: {
    type: String as PropType<PixelSize>,
    default: '12px'
  }
})
</script>

<template lang="pug">
div.BulletpointCard
  slot
</template>

<style lang="sass">
.BulletpointCard
  border-radius: var(--radius-small)
  display: flex
  flex-direction: column
  transition: var(--trans)
  color: v-bind(font)
  gap: v-bind(gap)

  *
    margin: 0

  > img
    height: 28px

  @media (min-width: 1201px)
    justify-content: start
    align-items: start

  @media (max-width: 1200px)
    justify-content: start
    align-items: center

    p, h1, h2, h3
      text-align: center
</style>
