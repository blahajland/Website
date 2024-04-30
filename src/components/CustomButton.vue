<script setup>
import { IS_COLOR, IS_CSS_VAR } from '@/assets/js/propsTools.js'

defineProps({
  color: {
    default: 'var(--background)',
    validator(value) {
      return value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value))
    }
  },
  font: {
    default: 'var(--text)',
    validator(value) {
      return value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value))
    }
  },
  hover: {
    default: 'var(--hover)',
    validator(value) {
      return value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value))
    }
  }
})
</script>

<template>
  <div class="CustomButton">
    <slot></slot>
  </div>
</template>

<style lang="sass">

.CustomButton
  padding: 10px 20px
  border-radius: var(--radius-inf)
  background: v-bind(color) !important
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  transition: var(--trans)
  color: v-bind(font) !important
  gap: 8px

  &:hover
    background: v-bind(hover) !important

  &:active
    background: var(--blahaj) !important

  > img
    height: 20px
    width: 20px
    filter: var(--filter)

  > p
    margin: 0
    font-weight: bold
</style>
