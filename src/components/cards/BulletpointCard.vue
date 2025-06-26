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
  background: v-bind(color)
  border-radius: 34px
  display: flex
  flex-direction: column
  transition: var(--trans)
  color: color-mix(in srgb, v-bind(font) 60%, v-bind(color) 40%)
  gap: v-bind(gap)
  background: color-mix(in srgb, v-bind(color), transparent 75%)
  backdrop-filter: blur(12px)
  border-radius: 34px
  box-shadow: inset -1px 1px 2px rgba(255,255,255,0.200), -1px 1px 2px rgba(0,0,0,0.250)
  position: relative
  
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: linear-gradient(color-mix(in srgb, v-bind(color), transparent 90%) 0%,rgba(0,125,255,0.000) 100%)
    border-radius: 34px
    pointer-events: none

  &::after
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-image: url('/src/assets/filters/noise.svg')
    background-repeat: repeat
    opacity: 0.15
    mix-blend-mode: color-burn
    border-radius: 34px
    pointer-events: none

  *
    margin: 0

  > img
    height: 28px
    filter: brightness(0%) invert(100%)

  @media (min-width: 1201px)
    justify-content: center
    align-items: start

  @media (max-width: 1200px)
    justify-content: start
    align-items: center

    p, h1, h2, h3
      text-align: center
</style>
