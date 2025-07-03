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
  background: var(--text2)
  backdrop-filter: blur(12px)
  border: 4px solid var(--surface1)
  
  font-size: 1.2rem

  > img
    height: 25px
    width: 25px
    filter: var(--filter)

  > p
    margin: 0
    font-weight: 800
    white-space: nowrap

  &:hover
    border: 4px dashed var(--button-border)
    color: var(--button-hvr-text)
    background: var(--button) !important
    transition: var(--trans)

    > img
      height: 25px
      width: 25px
      filter: var(--filter-anti)

  &:active
    background: var(--button-hvr) !important
</style>
