<script setup lang="ts">
import ThingsContainer from '@/components/containers/ThingsContainer.vue'
import AnnouncementBar from '@/components/AnnouncementBar.vue'
</script>

<template>
  <div class="TopBar">
    <RouterLink to="/">
      <img alt="Logo" src="https://assets.blahaj.land/logos/logo/Text/white%20-%20nonpadded.png" />
    </RouterLink>
    <div class="announcement-pill-container">
      <Suspense>
        <AnnouncementBar />
        <template #fallback></template>
      </Suspense>
    </div>
    <ThingsContainer>
      <slot></slot>
    </ThingsContainer>
  </div>
</template>

<style lang="sass">
.TopBar
  display: flex
  align-items: center

  > a > img
    filter: var(--filter)

.announcement-pill-container
  flex: 1
  display: flex
  justify-content: center
  margin: 0 24px

@media (min-width: 1201px)
  .TopBar
    flex-direction: row
    justify-content: space-between
    padding: 24px
    border-radius: 0 0 24px 24px

    > a > img
      height: 40px

@media (max-width: 1200px)
  .TopBar
    flex-direction: column
    justify-content: center
    gap: 16px
    padding: 24px
    border-radius: 24px 24px 0 0

    > a > img
      height: 30px

  .announcement-pill-container
    width: 100%
    margin: 0
</style>
