<script setup lang="ts">
defineProps({
  rows: {
    type: Number,
    default: 3
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
