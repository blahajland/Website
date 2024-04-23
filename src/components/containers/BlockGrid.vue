<script setup>

import { IS_GTZ_NB } from '@/assets/js/propsTools.js'

defineProps({
  rows: {
    default: '3',
    type: String,
    validator(value) {
      return value === undefined ||
        value instanceof String
        && IS_GTZ_NB.test(value)
    }
  }
})

</script>

<template>
  <div class="BlockGrid">
    <slot></slot>
  </div>
</template>

<style>
.BlockGrid {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(v-bind(rows), 1fr);
  gap: 16px;
}
</style>