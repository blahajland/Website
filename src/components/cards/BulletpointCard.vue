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
    default: '12px'
  }
})
</script>

<template>
  <div class="BulletpointCard">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.BulletpointCard
  padding: 24px
  flex-grow: 1
  background: var(--background)
  border-radius: 34px
  display: flex
  flex-direction: column
  transition: var(--trans)
  color: var(--text2)
  gap: v-bind(gap)
  background: var(--surface1)
  backdrop-filter: blur(12px)
  border-radius: 34px
  position: relative
  




  *
    margin: 0

  > img
    height: 28px
    filter: var(--filter-bulletpoint)

  @media (min-width: 1201px)
    justify-content: center
    align-items: start

  @media (max-width: 1200px)
    justify-content: start
    align-items: center

    p, h1, h2, h3
      text-align: center
</style>
