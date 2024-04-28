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
  <div class="SmallBlock">
    <slot></slot>
  </div>
</template>

<style>
.SmallBlock {
  background: v-bind(color);
  border-radius: var(--radius-small);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  transition: var(--trans);
  color: v-bind(font);
  gap: 24px;
  flex: 0 0 128px;
}

.SmallBlock * {
  margin: 0;
}

.SmallBlock > img {
  height: 64px;
  border-radius: var(--radius-inf);
}

.SmallBlock:hover {
  background: color-mix(in srgb, v-bind(color), var(--hover));
}

.SmallBlock:active {
  background: var(--blahaj);
}
</style>
