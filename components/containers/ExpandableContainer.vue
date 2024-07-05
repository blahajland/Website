<script lang="ts" setup>
import { type Ref, ref } from "vue";
import BlahajButton from "@/components/buttons/BlahajButton.vue";
import { getAsset } from "blahaj-library";

const isExpanded = ref(false);
const expandableRef: Ref<HTMLDivElement | null> = ref(null);

onMounted(() => {
  const children = (expandableRef.value as HTMLDivElement).children;
  let order = -2;
  for (const e of children) {
    const el = e as HTMLElement;
    if (order > 0) el.style.setProperty("--order", `${order}`);
    order += 1;
  }
});
</script>

<template>
  <div class="ExpandableContainer">
    <div
      :class="{ expanded: isExpanded }"
      class="Expandable"
      ref="expandableRef"
    >
      <slot />
    </div>
    <BlahajButton @click="isExpanded = !isExpanded">
      <NuxtImg v-if="isExpanded" :src="getAsset(`icons/up.svg`)" alt="Up" />
      <NuxtImg v-else :src="getAsset(`icons/down.svg`)" alt="Down" />
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
  transition: var(--trans)
  min-height: 0

  .Expandable
    gap: 16px

    @media (min-width: 1201px)
      display: grid
      grid-auto-rows: 1fr
      grid-template-columns: repeat(3, 1fr)
      overflow-y: hidden

    @media (max-width: 1200px)
      display: flex
      flex-direction: column
      justify-content: start
      align-items: stretch

    &:not(.expanded) > *:nth-child(n+4)
      display: none

    &.expanded > *
      animation: SimpleFadeIn ease-in-out calc(0.15s * var(--order, 0))
</style>
