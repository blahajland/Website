<script lang="ts" setup>
import { ref } from "vue";
import BlahajButton from "@/components/buttons/BlahajButton.vue";
import { getAsset } from "blahaj-library";

const isExpanded = ref(false);
</script>

<template>
  <div class="ExpandableContainer">
    <div :class="{ expanded: isExpanded }" class="Expandable">
      <slot />
    </div>
    <BlahajButton @click="isExpanded = !isExpanded">
      <img v-if="isExpanded" :src="getAsset(`icons/up.png`)" alt="Up" />
      <img v-else :src="getAsset(`icons/down.png`)" alt="Down" />
      <p>{{ isExpanded ? "Shrink" : "Expand" }}</p>
    </BlahajButton>
  </div>
</template>

<style lang="sass">
.ExpandableContainer
  display: flex
  flex-direction: column
  justify-content: start
  align-items: center
  gap: 24px

.Expandable
  gap: 16px

  > *
    animation: var(--anim)

  @media (min-width: 1201px)
    display: grid
    grid-auto-rows: 1fr
    grid-template-columns: repeat(3, 1fr)
    height: 1fr
    overflow: hidden

  @media (max-width: 1200px)
    display: flex
    flex-direction: column
    justify-content: start
    align-items: stretch

  &:not(.expanded) > *:nth-child(n+4)
    display: none
</style>
