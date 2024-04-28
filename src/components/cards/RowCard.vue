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
  <div class="SideBlock">
    <div>
      <slot name="image"></slot>
    </div>
    <div>
      <slot name="default"></slot>
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 1201px) {
  .SideBlock {
    background: v-bind(color);
    border-radius: var(--radius-small);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px;
    transition: var(--trans);
    color: v-bind(font);
    gap: 32px;
    flex: 0 0 324px;
  }

  .SideBlock > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 4px;
  }

  .SideBlock * {
    margin: 0;
  }

  .SideBlock > div > img {
    height: 64px;
  }
}

@media screen and (max-width: 1200px) {
  .SideBlock {
    background: v-bind(color);
    border-radius: var(--radius-small);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    transition: var(--trans);
    color: v-bind(font);
    gap: 24px;
  }

  .SideBlock > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 4px;
  }

  .SideBlock > div:last-of-type {
    flex-grow: 1;
  }

  .SideBlock * {
    margin: 0;
  }

  .SideBlock > div > img {
    height: 64px;
  }
}
</style>
