<script setup>
import { IS_COLOR, IS_CSS_VAR, IS_PIXEL_SZ } from '@/assets/js/propsTools.js'

defineProps({
  color: {
    default: 'var(--blahaj)',
    validator(value) {
      return value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value))
    }
  },
  font: {
    default: '#101010',
    validator(value) {
      return value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value))
    }
  },
  gap: {
    default: '16px',
    validator(value) {
      value instanceof String && IS_PIXEL_SZ.test(value)
    }
  }
})
</script>

<template>
  <div class="VerticalCard">
    <slot></slot>
  </div>
</template>

<style lang="sass">

.VerticalCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: column
  justify-content: start
  align-items: center
  transition: var(--trans)
  color: v-bind(font)

  @media (min-width: 1201px)
    padding: 32px
    gap: v-bind(gap)
    flex: 0 0 300px


  @media (max-width: 1200px)
    padding: 24px 32px
    gap: 24px

  p, h3, h1
    text-align: center

  *
    margin: 0

  > img
    height: 32px
</style>
