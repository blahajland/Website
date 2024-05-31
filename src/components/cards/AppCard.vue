<script setup lang="ts">
import { isValidColorName } from '@/library/ts/common-tools'

defineProps({
  color: {
    type: String,
    validator: isValidColorName,
    default: 'var(--surface2)'
  },
  font: {
    type: String,
    validator: isValidColorName,
    default: '#101010'
  }
})
</script>

<template lang="pug">
.AppCard
  div
    slot(name='image')
  div
    slot(name='default')
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
  color: v-bind(font)

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
