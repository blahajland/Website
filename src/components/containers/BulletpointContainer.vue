<script setup lang="ts">
import { isValidColorName } from '@/library/ts/common-tools'
import type { PropType } from 'vue'
import type { PixelSize } from '@/library/ts/common-types'

const props = defineProps({
  color: {
    type: String,
    validator: isValidColorName,
    default: 'var(--surface2)'
  },
  isInverted: {
    type: Boolean,
    default: false
  }
})

const flexDirection = props.isInverted ? 'row-reverse' : 'row'
</script>

<template lang="pug">
div.BulletpointContainer
  div
    slot
  div
    slot(name="image")
</template>

<style lang="sass">
.BulletpointContainer
  display: flex
  flex-direction: v-bind(flexDirection)
  justify-content: stretch
  align-items: stretch
  background: v-bind(color)

  > div
    display: flex
    flex-direction: column
    align-items: stretch

    &:first-of-type
      gap: 32px
      justify-content: center

    &:nth-of-type(2)
      justify-content: end
      flex: 1

      > img
        width: 100%

  @media (min-width: 1201px)
    background: v-bind(color)
    border-radius: var(--radius-med)

    > div:first-of-type
      padding: 32px 48px
      flex: 0 0
      min-width: 400px
      max-width: 400px

  @media (max-width: 1200px)
    border-radius: var(--radius-small)
    padding: 32px

    > div:first-of-type
      width: 100%

    > div:nth-of-type(2)
        display: none
</style>
