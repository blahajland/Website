<script lang="ts" setup>
import ThingsContainer from "@/components/containers/ThingsContainer.vue";
import { getAsset } from "blahaj-library";
</script>

<template>
  <div class="TopBar">
    <RouterLink to="/">
      <NuxtImg :src="getAsset('pictures/text-logo.png')" alt="Logo" />
    </RouterLink>
    <ThingsContainer>
      <slot />
    </ThingsContainer>
  </div>
</template>

<style lang="sass">
.TopBar
  display: flex
  align-items: center
  padding: 24px

  > a > img
    filter: var(--filter)

@media (min-width: 1201px)
  .TopBar
    flex-direction: row
    justify-content: space-between

    > a > img
      height: 32px

@media (max-width: 1200px)
  .TopBar
    flex-direction: column
    justify-content: center
    gap: 16px

    > a > img
      height: 36px
</style>
