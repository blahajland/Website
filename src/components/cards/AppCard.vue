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
  background: var(--background)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  transition: var(--trans)
  color: var(--text2)
  background: var(--surface1)
  backdrop-filter: blur(12px)
  border-radius: 34px
  





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
      height: 60px
      filter: brightness(0.8) contrast(1.2) saturate(1.4) 

    &:last-of-type
      flex-grow: 1

  *
    margin: 0
</style>
