<script setup lang="ts">
import { ref } from 'vue'

const SCROLL_AMOUNT = 500

const scrollComp = ref(null)

const scroll = (amount: number, vertical = false) => {
  if (!scrollComp.value) return
  let divElement = scrollComp.value as HTMLDivElement
  if (vertical) divElement.scrollTop += amount
  else divElement.scrollLeft += amount
}
</script>

<template>
  <div class="SlideableContainer">
    <div class="SlideButton displayOnDesktop" @click="scroll(-1 * SCROLL_AMOUNT)">
      <img alt="&lt;" src="https://blahaj.land/static/images/icons/left.png" />
    </div>
    <div class="SlideButton displayOnMobile" @click="scroll(-1 * SCROLL_AMOUNT, true)">
      <img alt="&lt;" src="https://blahaj.land/static/images/icons/up.png" />
    </div>
    <div ref="scrollComp" class="SlideContainer">
      <slot></slot>
    </div>
    <div class="SlideButton displayOnMobile" @click="scroll(SCROLL_AMOUNT, true)">
      <img alt="&gt;" src="https://blahaj.land/static/images/icons/down.png" />
    </div>
    <div class="SlideButton displayOnDesktop" @click="scroll(SCROLL_AMOUNT)">
      <img alt="&gt;" src="https://blahaj.land/static/images/icons/right.png" />
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
    gap: 4px

  .SlideButton
    box-sizing: border-box
    width: 100%
    padding: 8px

  .SlideContainer
    width: 100%
    max-height: 512px
    flex-direction: column
    overflow: hidden
</style>
