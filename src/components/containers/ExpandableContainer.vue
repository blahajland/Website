<script setup lang="ts">
import { ref } from 'vue'
import BlahajButton from '@/components/buttons/BlahajButton.vue'

const isExpanded = ref(false)
</script>

<template>
  <div class="ExpandableContainer">
    <div class="Expandable" :class="{ expanded: isExpanded }">
      <slot></slot>
    </div>
    <BlahajButton @click="isExpanded = !isExpanded">
      <img :src="isExpanded ? 'https://assets.blahaj.land/icons/up.png' : 'https://assets.blahaj.land/icons/down.png'" alt="" />
      <p>{{ isExpanded ? 'Shrink' : 'Expand' }}</p>
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

  &:not(.expanded)> *:nth-child(n+4)
    display: none
</style>
