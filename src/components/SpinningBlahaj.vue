<script setup lang="ts">
import { assets, changeLoc } from 'blahaj-library'
import links from '@/assets/json/links.json'
</script>

<template>
  <div class="SpinningBlahaj" @click="changeLoc(links.blahaj)">
    <img :src="assets.images.gifs.get('spinning-blahaj')" alt="Blahaj" />
  </div>
</template>

<style lang="sass">

.SpinningBlahaj
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  cursor: pointer
  align-self: center

  > img
    z-index: -1

  @media (min-width: 1201px)
    padding: 64px 0 32px

    > img
      height: 220px

  @media (max-width: 1200px)
    padding: 96px 0 16px

    > img
      width: 80vw
</style>
