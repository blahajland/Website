<script setup lang="ts">
import { colorsService } from 'blahaj-library'

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
  }
})
</script>

<template>
  <div class="AppCard">
    <div>
      <slot name="image"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass">

.AppCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  transition: var(--trans)
  color: color-mix(in srgb, v-bind(font) 60%, v-bind(color) 40%)
  background: color-mix(in srgb, v-bind(color), transparent 75%)
  backdrop-filter: blur(12px)
  border-radius: 34px
  box-shadow: inset -1px 1px 2px rgba(255,255,255,0.200), -1px 1px 2px rgba(0,0,0,0.250)
  border-radius: 34px
  position: relative
  
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: linear-gradient(color-mix(in srgb, v-bind(color), transparent 80%) 0%,rgba(0,125,255,0.000) 100%)
    border-radius: 34px
    pointer-events: none

  @media (min-width: 1201px)
    padding: 24px 32px
    gap: 32px
    flex: 0 0 320px

  @media (max-width: 1200px)
    padding: 24px
    gap: 24px

  > div
    display: flex
    flex-direction: column
    justify-content: center
    align-items: start
    gap: 4px

    > img
      height: 56px

    &:last-of-type
      flex-grow: 1

  *
    margin: 0
</style>
