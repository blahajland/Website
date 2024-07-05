<script lang="ts" setup>
import { ref } from "vue";
import { getAsset } from "blahaj-library";

const SCROLL_AMOUNT = 500;

const scrollComp = ref(null);

const scroll = (amount: number, vertical = false) => {
  if (!scrollComp.value) return;
  const divElement = scrollComp.value as HTMLDivElement;
  if (vertical) divElement.scrollTop += amount;
  else divElement.scrollLeft += amount;
};
</script>

<template>
  <div class="CarouselContainer">
    <div
      class="SlideButton displayOnDesktop"
      @click="scroll(-1 * SCROLL_AMOUNT)"
    >
      <NuxtImg :src="getAsset('icons/left.svg')" alt="&lt;" />
    </div>
    <div
      class="SlideButton displayOnMobile"
      @click="scroll(-1 * SCROLL_AMOUNT, true)"
    >
      <NuxtImg :src="getAsset('icons/up.svg')" alt="&lt;" />
    </div>
    <div ref="scrollComp" class="Carousel">
      <slot />
    </div>
    <div
      class="SlideButton displayOnMobile"
      @click="scroll(SCROLL_AMOUNT, true)"
    >
      <NuxtImg :src="getAsset('icons/down.svg')" alt="&gt;" />
    </div>
    <div class="SlideButton displayOnDesktop" @click="scroll(SCROLL_AMOUNT)">
      <NuxtImg :src="getAsset('icons/right.svg')" alt="&gt;" />
    </div>
  </div>
</template>

<style lang="sass">
.CarouselContainer
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

.Carousel
  -ms-overflow-style: none
  scrollbar-width: none
  display: flex
  justify-content: start
  align-items: stretch
  gap: 16px
  scroll-behavior: smooth
  border-radius: var(--radius-small)

  > *
    animation: var(--anim)

  &::-webkit-scrollbar
    display: none

@media (min-width: 1201px)
  .CarouselContainer
    width: 100%
    flex-direction: row
    gap: 8px

  .SlideButton:hover
    padding: 8px

  .Carousel
    flex: 1 0
    flex-direction: row
    overflow: scroll

@media (max-width: 1200px)
  .CarouselContainer
    flex-direction: column
    gap: 4px

  .SlideButton
    box-sizing: border-box
    width: 100%
    padding: 8px

  .Carousel
    width: 100%
    max-height: 512px
    flex-direction: column
    overflow: hidden
</style>
