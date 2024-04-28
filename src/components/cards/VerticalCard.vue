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
    default: '12px',
    validator(value) {
      (value instanceof String && IS_PIXEL_SZ.test(value))
    }
  }
})
</script>

<template>
  <div class="ContentBlock">
    <slot></slot>
  </div>
</template>

<style>
.ContentBlock {
  background: v-bind(color);
  border-radius: var(--radius-small);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 32px;
  transition: var(--trans);
  color: v-bind(font);
  gap: v-bind(gap);
  flex: 0 0 300px;
}

.ContentBlock > p,
.ContentBlock > h3,
.ContentBlock > h1 {
  text-align: center;
}

.ContentBlock * {
  margin: 0;
}

.ContentBlock > img {
  height: 32px;
}
</style>
