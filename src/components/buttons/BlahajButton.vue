<script setup lang="ts">
import { colorsService } from 'blahaj-library'

defineProps({
  font: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: 'var(--surface3)'
  },
  background: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: 'var(--surface1)'
  },
  hover: {
    type: String,
    default: 'color-mix(in srgb, var(--surface1), var(--surface2))'
  }
})
</script>

<template>
  <div class="BlahajButton">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.BlahajButton
  padding: 10px 20px
  border-radius: var(--radius-inf)
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  transition: var(--trans)
  gap: 10px
  flex: 0 0
  color: color-mix(in srgb, v-bind(font) 10%, #ffffff 90%)
  background: color-mix(in srgb, v-bind(font) 23%, transparent 77%)
  backdrop-filter: blur(12px)
  box-shadow: inset -1px 1px 2px rgba(255,255,255,0.200), -1px 1px 2px rgba(0,0,0,0.250)

  > img
    height: 20px
    width: 20px
    filter: var(--filter)

  > p
    margin: 0
    font-weight: bold
    white-space: nowrap

  &:hover
    background: v-bind(hover) !important

  &:active
    background: var(--surface2) !important
</style>
