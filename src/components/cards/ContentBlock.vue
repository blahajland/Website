<script setup>
import { IS_COLOR, IS_CSS_VAR } from '@/assets/js/propsTools.js'

defineProps({
  color: {
    default: 'var(--blahaj)',
    type: String,
    validator(value) {
      return (
        value === undefined ||
        (value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value)))
      )
    }
  },
  font: {
    default: 'var(--text)',
    type: String,
    validator(value) {
      return (
        value === undefined ||
        (value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value)))
      )
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
  justify-content: center;
  align-items: center;
  padding: 32px;
  transition: var(--trans);
  color: v-bind(font);
  gap: 16px;
}

.ContentBlock > p,
.ContentBlock > h3 {
  max-width: 90%;
  text-align: center;
}

.ContentBlock * {
  margin: 0;
}

.ContentBlock > img {
  height: 32px;
}
</style>
