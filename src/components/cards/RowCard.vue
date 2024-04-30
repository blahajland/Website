<script setup>
import { IS_COLOR, IS_CSS_VAR } from '@/assets/js/propsTools.js'

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
  }
})
</script>

<template>
  <div class="RowCard">
    <div>
      <slot name="image"></slot>
    </div>
    <div>
      <slot name="default"></slot>
    </div>
  </div>
</template>

<style lang="sass">

.RowCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  transition: var(--trans)
  color: v-bind(font)

  > div
    display: flex
    flex-direction: column
    justify-content: center
    align-items: start
    gap: 4px

    > img
      height: 64px

    &:last-of-type
      flex-grow: 1

  *
    margin: 0

@media (min-width: 1201px)
  .RowCard
    padding: 24px
    gap: 32px
    flex: 0 0 324px

@media (max-width: 1200px)
  .RowCard
    padding: 24px 32px
    gap: 24px
</style>
