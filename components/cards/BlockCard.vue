<script lang="ts" setup>
import type { PropType } from "vue";
import { colorsService, type PixelSize } from "blahaj-library";

defineProps({
  color: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: "var(--surface2)",
  },
  font: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: "#101010",
  },
  gap: {
    type: String as PropType<PixelSize>,
    default: "16px",
  },
});
</script>

<template>
  <div class="BlockCard">
    <slot />
  </div>
</template>

<style lang="sass">

.BlockCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  transition: var(--trans)
  color: v-bind(font)
  gap: v-bind(gap)
  box-sizing: border-box

  @media (min-width: 1201px)
    padding: 32px
    flex: 0 0 352px

  @media (max-width: 1200px)
    padding: 24px 32px

  p, h3, h1
    text-align: center

  *
    margin: 0

  > img
    height: 32px
</style>
