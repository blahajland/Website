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
    default: 'var(--button)'
  },
  hover: {
    type: String,
    default: 'var(--button-hvr)'
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
  gap: 10px
  flex: 0 0
  color: var(--text)
  background: var(--button)
  backdrop-filter: blur(12px)
  border: 2px solid var(--surface1)
  
  font-size: 1.2rem

  > img
    height: 25px
    width: 25px
    filter: var(--filter)

  > p
    margin: 0
    font-weight: 900
    white-space: nowrap

  &:hover
    border: 4px dashed var(--text2)
    color: var(--text2)
    background: var(--surface1) !important
    margin: -2px -2px
    transition: var(--trans)

    > img
      height: 25px
      width: 25px
      filter: var(--filter-anti)

  &:active
    background: var(--button-hvr) !important
</style>
