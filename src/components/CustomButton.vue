<script setup>
import { IS_COLOR, IS_CSS_VAR } from '@/assets/js/propsTools.js'

defineProps({
  color: {
    default: 'var(--background)',
    validator(value) {
      return value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value))
    }
  },
  font: {
    default: 'var(--text)',
    validator(value) {
      return value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value))
    }
  },
  hover: {
    default: 'var(--hover)',
    validator(value) {
      return value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value))
    }
  }
})
</script>

<template>
  <div class="CustomButton">
    <slot></slot>
  </div>
</template>

<style>
@media screen and (min-width: 1201px) {
  .CustomButton {
    padding: 10px 20px;
    border-radius: var(--radius-inf);
    background: v-bind(color) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--trans);
    color: v-bind(font) !important;
    gap: 8px;
  }

  .CustomButton:hover {
    background: v-bind(hover) !important;
  }

  .CustomButton:active {
    background: var(--blahaj) !important;
  }

  .CustomButton > img {
    height: 20px;
    width: 20px;
    filter: var(--filter);
  }

  .CustomButton > p {
    margin: 0;
    font-weight: bold;
  }
}

@media screen and (max-width: 1200px) {
  .CustomButton {
    padding: 10px 20px;
    border-radius: var(--radius-inf);
    background: v-bind(color) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--trans);
    color: v-bind(font) !important;
    gap: 8px;
  }

  .CustomButton:hover {
    background: v-bind(hover) !important;
  }

  .CustomButton:active {
    background: var(--blahaj) !important;
  }

  .CustomButton > img {
    height: 20px;
    width: 20px;
    filter: var(--filter);
  }

  .CustomButton > p {
    margin: 0;
    font-weight: bold;
  }
}
</style>
