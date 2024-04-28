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
.GridContainer {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(v-bind(rows), 1fr);
  gap: 16px;
}
</style>
