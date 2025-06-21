<script setup lang="ts">
import type { PropType } from 'vue'
import { colorsService, type PixelSize } from 'blahaj-library'

defineProps({
  color: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: 'var(--surface2)'
  },
  font: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: '#101010'
  },
  gap: {
    type: String as PropType<PixelSize>,
    default: '16px'
  }
})
</script>

<template>
  <div class="BlockCard">
    <slot></slot>
  </div>
</template>

<style lang="sass">

.BlockCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  transition: var(--trans)
  color: v-bind(font)
  gap: v-bind(gap)
  box-sizing: border-box
  background: color-mix(in srgb, v-bind(color), transparent 58%)
  backdrop-filter: blur(12px)
  border-radius: 24px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
  box-shadow: inset -1px 1px 2px rgba(255,255,255,0.200), -1px 1px 2px rgba(0,0,0,0.250)
  border-radius: 24px

  @media (min-width: 1201px)
    padding: 32px
    flex: 0 0 352px

  @media (max-width: 1200px)
    padding: 24px 32px

  p, h3, h1
    text-align: center

  *
    margin: 0

  > img
    height: 32px
</style>
