<script setup lang="ts">
import { changeLoc } from 'blahaj-library'
import links from '@/assets/data/links.json'
</script>

<template>
  <div class="SpinningBlahaj" @click="changeLoc(links.portals.blahaj)">
    <img src="https://assets.blahaj.land/gifs/spinning-blahaj.gif" alt="Blahaj" />
  </div>
</template>

<style lang="sass">

.SpinningBlahaj
  display: flex
  flex-direction: column
  margin-top: 32px
  justify-content: center
  align-items: center
  cursor: pointer
  align-self: center

  > img
    z-index: -1

  @media (min-width: 1201px)
    padding: 64px 0 32px

    > img
      height: 230px
      filter: contrast(5000%) brightness(90%) grayscale(1)

  @media (max-width: 1200px)
    padding: 0 0 16px
    margin-top: 0

    > img
      width: 80vw
      filter: contrast(5000%) brightness(90%) grayscale(1) drop-shadow(8px 8px 10px var(--button-hvr))
      
</style>
