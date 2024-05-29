<script setup lang="ts">
import { isValidColorName } from '@/library/ts/common-tools'
import type { PropType } from 'vue'
import type { PixelSize } from '@/library/ts/common-types'

defineProps({
  color: {
    type: String,
    validator: isValidColorName,
    default: 'var(--surface2)'
  },
  font: {
    type: String,
    validator: isValidColorName,
    default: '#101010'
  },
  gap: {
    type: String as PropType<PixelSize>,
    default: '16px'
  }
})
</script>

<template lang="pug">
div.BlockCard
  slot
</template>

<style lang="sass">

.BlockCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: column
  justify-content: start
  align-items: center
  transition: var(--trans)
  color: v-bind(font)
  gap: v-bind(gap)


  @media (min-width: 1201px)
    padding: 32px
    flex: 0 0 300px

  @media (max-width: 1200px)
    padding: 24px 32px

  p, h3, h1
    text-align: center

  *
    margin: 0

  > img
    height: 32px
</style>
