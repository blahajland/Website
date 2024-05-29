<script setup lang="ts">
import { assets } from '@/library/ts/static-tools'
</script>

<template lang="pug">
div.LoadingState
  img(alt="Loading...", :src="assets.images.get('Loading')")
  div
    h1 Loading...
    p It won't be long we promise :3
</template>

<style lang="sass">
.LoadingState
  width: 100%
  padding: 16px 0
  display: flex
  justify-content: center
  align-items: center

  @media (min-width: 1201px)
    flex-direction: row
    gap: 32px

  @media (max-width: 1200px)
    flex-direction: column
    gap: 8px

  > div
    display: flex
    flex-direction: column
    justify-content: start
    align-items: start

  *
    margin: 0

  > img
    height: 48px
</style>
