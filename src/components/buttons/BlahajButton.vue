<script setup lang="ts">
import { colorsService } from 'blahaj-library'

defineProps({
  font: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: 'var(--text)'
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
  background: v-bind(background) !important
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  transition: var(--trans)
  color: v-bind(font) !important
  gap: 10px
  flex: 0 0

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
