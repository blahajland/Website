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

<style>
@media screen and (min-width: 1201px) {
  .GridContainer {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(v-bind(rows), 1fr);
    gap: 16px;
  }
}

@media screen and (max-width: 1200px) {
  .GridContainer {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    gap: 16px;
  }
}
</style>
