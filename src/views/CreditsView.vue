<script setup lang="ts">
import BlockCard from '@/components/cards/BlockCard.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import ContentContainer from '@/components/roots/ContentContainer.vue'
import PageContainer from '@/components/roots/PageContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import BlahajButton from '@/library/vue/BlahajButton.vue'
import { changeLoc } from '@/library/ts/common-tools'
import { assets } from '@/library/ts/static-tools'

changeLoc('#', false)
</script>

<template lang="pug">
  PageContainer
    SpinningBlahaj
    ContentContainer(last)
      template(#title)
        h1 Credits
        p Here's who does what :3
      GridContainer(:rows="4")
        BlockCard(color="#D4D9FF")
          img(:src="assets.images.icons.get('cloud')", alt="Cloud")
          h3 Services
          p Hosted by #[b eryn]
          BlahajButton(background="var(--background)", @click="changeLoc('https://www.github.com/hericiumvevo/')")
            img(:src="assets.images.icons.get('website')", alt="Link")
            p GitHub
        BlockCard(color="#F6D4FF")
          img(:src="assets.images.icons.get('open')", alt="Website")
          h3 Icons
          p by #[b Nerd]
          BlahajButton(background="var(--background)", @click="changeLoc('https://www.github.com/imalonelynerd')")
            img(:src="assets.images.icons.get('website')", alt="Link")
            p GitHub
        BlockCard(color="#FFD4D9")
          img(:src="assets.images.icons.get('website')", alt="Website")
          h3 Website
          p by #[b Nerd]
          BlahajButton(background="var(--background)", @click="changeLoc('https://www.github.com/imalonelynerd')")
            img(:src="assets.images.icons.get('website')", alt="Website")
            p GitHub
        BlockCard(color="#ACD3DC")
          img(:src="assets.images.get('Favicon')", alt="Blobhaj")
          h3 "Blobhaj" icons
          p by #[b heatherhorns]
          BlahajButton(background="var(--background)", @click="changeLoc('https://www.reddit.com/user/heatherhorns/')")
            img(:src="assets.images.icons.get('website')", alt="Blobhaj")
            p Reddit
</template>
