<script setup lang="ts">
import type { PropType } from 'vue'
import { colorsService, type PixelSize } from 'blahaj-library'

const props = defineProps({
  color: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: 'var(--surface2)'
  },
  gap: {
    type: String as PropType<PixelSize>,
    default: '16px'
  },
  isInverted: {
    type: Boolean,
    default: false
  }
})

const flexDirection = props.isInverted ? 'row-reverse' : 'row'
const transform = props.isInverted ? '-16px' : '16px'
</script>

<template>
  <div class="BulletpointContainer">
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="image"></slot>
    </div>
  </div>
</template>

<style lang="sass">
.BulletpointContainer
  display: flex
  flex-direction: v-bind(flexDirection)
  justify-content: stretch
  align-items: stretch
  gap: v-bind(gap)

  > div
    border-radius: var(--radius-small)
    display: flex
    flex-direction: column
    align-items: stretch

    > *
      animation: var(--anim)

    &:first-of-type
      gap: v-bind(gap)
      justify-content: center

    &:nth-of-type(2)
      background: v-bind(color)
      justify-content: end
      flex: 1
      overflow: hidden

      &:hover > img
        transform: translate(v-bind(transform), 8px)

      > img
        width: 100%
        transition: var(--trans)

  @media (min-width: 1201px)
    > div:first-of-type
      flex: 0 0
      min-width: 400px
      max-width: 400px

  @media (max-width: 1200px)
    > div:first-of-type
      width: 100%

    > div:nth-of-type(2)
        display: none
</style>
