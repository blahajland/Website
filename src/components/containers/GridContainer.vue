<script setup>
import { IS_GTZ_NB } from '@/assets/js/propsTools.js'

defineProps({
  rows: {
    default: '3',
    validator(value) {
      value instanceof String && IS_GTZ_NB.test(value)
    }
  }
})
</script>

<template>
  <div class="GridContainer">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.GridContainer
  gap: 16px

  @media (min-width: 1201px)
    display: grid
    grid-auto-rows: 1fr
    grid-template-columns: repeat(v-bind(rows), 1fr)

  @media (max-width: 1200px)
    display: flex
    flex-direction: column
    justify-content: start
    align-items: stretch
</style>
