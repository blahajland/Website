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
    default: '#ffffff'
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
  background: var(--background)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  transition: var(--trans)
  color: var(--text2)
  gap: v-bind(gap)
  box-sizing: border-box
  background: var(--surface1)
  backdrop-filter: blur(12px)
  border-radius: 34px
  position: relative
  border-radius: 34px
  




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
