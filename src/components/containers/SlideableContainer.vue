<script setup>
import { ref } from 'vue'

const SCROLL_AMOUNT = 500

const scrollComp = ref(null)

function scroll(amount) {
  if (scrollComp.value) {
    scrollComp.value.scrollLeft += amount
  }
}
</script>

<template>
  <div class="SlideableContainer">
    <div class="SlideButton" @click="scroll(-1 * SCROLL_AMOUNT)">
      <img alt="&lt;" src="/icons/left.png" />
    </div>
    <div ref="scrollComp" class="SlideContainer">
      <slot></slot>
    </div>
    <div class="SlideButton" @click="scroll(SCROLL_AMOUNT)">
      <img alt="&gt;" src="/icons/right.png" />
    </div>
  </div>
</template>

<style lang="sass">

.SlideableContainer
  display: flex
  flex-direction: row
  justify-content: stretch
  align-items: center


.SlideContainer
  -ms-overflow-style: none
  scrollbar-width: none
  display: flex
  justify-content: start
  align-items: stretch
  gap: 16px

  &::-webkit-scrollbar
    display: none

@media (min-width: 1201px)
  .SlideableContainer
    width: 100%
    gap: 8px

  .SlideButton
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    border-radius: var(--radius-inf)
    transition: var(--trans)
    opacity: 0.5

    &:hover
      padding: 8px
      background: var(--surface1)
      opacity: 1

    > img
      height: 24px
      filter: var(--filter)

  .SlideContainer
    flex: 1 0
    flex-direction: row
    overflow: scroll
    scroll-behavior: smooth
    border-radius: var(--radius-small)

@media (max-width: 1200px)
  .SlideButton
    display: none

  .SlideContainer
    width: 100%
    flex-direction: column
</style>
