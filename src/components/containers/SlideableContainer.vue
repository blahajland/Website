<script setup>
import { ref } from 'vue'

const SCROLL_AMOUNT = 500

const scrollComp = ref(null)

function scroll(amount) {
  if (!scrollComp.value) {
    console.log('a')
  }
  scrollComp.value.scrollLeft += amount
}
</script>

<template>
  <div class="SlideableContainer">
    <div class="SlideButton" @click="scroll(-1 * SCROLL_AMOUNT)">
      <img src="/icons/left.png" alt="&lt;" />
    </div>
    <div class="SlideContainer" ref="scrollComp">
      <slot></slot>
    </div>
    <div class="SlideButton" @click="scroll(SCROLL_AMOUNT)">
      <img src="/icons/right.png" alt="&gt;" />
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 1201px) {
  .SlideableContainer {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    width: 100%;
    gap: 8px;
  }

  .SlideButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-inf);
    transition: var(--trans);
    opacity: 0.5;
  }

  .SlideButton:hover {
    padding: 8px;
    background: var(--hover);
    opacity: 1;
  }

  .SlideButton > img {
    height: 24px;
    filter: var(--filter);
  }

  .SlideContainer {
    flex: 1 0;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: stretch;
    gap: 16px;
    overflow: scroll;
    scroll-behavior: smooth;
    border-radius: var(--radius-small);
  }

  .SlideContainer::-webkit-scrollbar {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  .SlideableContainer {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
  }

  .SlideButton {
    display: none;
  }

  .SlideContainer {
    width: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    gap: 16px;
  }

  .SlideContainer::-webkit-scrollbar {
    display: none;
  }
}
</style>
