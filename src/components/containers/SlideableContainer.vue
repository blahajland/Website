<script setup>
import { ref } from 'vue'

const SCROLL_AMOUNT = 500

const scrollComp = ref(null)

function scroll(amount, vertical = false) {
  if (scrollComp.value) {
    if (vertical) {
      scrollComp.value.scrollTop += amount
    } else {
      scrollComp.value.scrollLeft += amount
    }
  }
}
</script>

<template>
  <div class="SlideableContainer">
    <div class="SlideButton displayOnDesktop" @click="scroll(-1 * SCROLL_AMOUNT)">
      <img alt="&lt;" src="/left.png" />
    </div>
    <div class="SlideButton displayOnMobile" @click="scroll(-1 * SCROLL_AMOUNT, true)">
      <img alt="&lt;" src="/left.png" />
    </div>
    <div ref="scrollComp" class="SlideContainer">
      <slot></slot>
    </div>
    <div class="SlideButton displayOnMobile" @click="scroll(SCROLL_AMOUNT, true)">
      <img alt="&gt;" src="/right.png" />
    </div>
    <div class="SlideButton displayOnDesktop" @click="scroll(SCROLL_AMOUNT)">
      <img alt="&gt;" src="/right.png" />
    </div>
  </div>
</template>

<style lang="sass">

.SlideableContainer
  display: flex
  justify-content: stretch
  align-items: center

.SlideButton
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  border-radius: var(--radius-inf)
  transition: var(--trans)
  opacity: 0.5

  &:hover
    background: var(--surface1)
    opacity: 1

  > img
    height: 24px
    filter: var(--filter)

.SlideContainer
  -ms-overflow-style: none
  scrollbar-width: none
  display: flex
  justify-content: start
  align-items: stretch
  gap: 16px
  scroll-behavior: smooth
  border-radius: var(--radius-small)

  &::-webkit-scrollbar
    display: none

@media (min-width: 1201px)
  .SlideableContainer
    width: 100%
    flex-direction: row
    gap: 8px

  .SlideButton:hover
    padding: 8px

  .SlideContainer
    flex: 1 0
    flex-direction: row
    overflow: scroll

@media (max-width: 1200px)
  .SlideableContainer
    flex-direction: column
    gap: 12px

  .SlideButton
    rotate: 90deg

  .SlideContainer
    width: 100%
    max-height: 512px
    flex-direction: column
    overflow: hidden
</style>
