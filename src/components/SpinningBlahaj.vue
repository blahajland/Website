<script setup lang="ts">
import { changeLoc } from '@/library/ts/common-tools'
import { assets } from '@/library/ts/static-tools'
</script>

<template lang="pug">
div(@click="changeLoc('https://blahaj.itsjamie.dev/')").SpinningBlahaj
  img(:src="assets.images.get('SpinningBlahaj','.gif')", alt="Blahaj")
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
