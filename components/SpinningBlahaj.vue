<script lang="ts" setup>
import { getAsset } from "blahaj-library";
import links from "@/assets/data/links";
</script>

<template>
  <a :href="links.portals.blahaj" class="SpinningBlahaj" title="Blahaj">
    <video autoplay loop muted>
      <source :src="getAsset('gifs/spinning-blahaj.webm')" type="video/webm" />
      <NuxtImg :src="getAsset('gifs/spinning-blahaj.gif')" alt="Blahaj" />
    </video>
  </a>
</template>

<style lang="sass">

.SpinningBlahaj
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  cursor: pointer
  align-self: center

  > video
    z-index: -1

  @media (min-width: 1201px)
    padding: 64px 0 32px

    > video
      height: 220px

  @media (max-width: 1200px)
    padding: 96px 0 16px

    > video
      width: 80vw
</style>
