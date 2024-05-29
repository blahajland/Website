<script setup lang="ts">
import ContentContainer from '@/components/roots/ContentContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import BlockCard from '@/components/cards/BlockCard.vue'
import { changeLoc } from '@/library/ts/common-tools'
import PageContainer from '@/components/roots/PageContainer.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import { assets } from '@/library/ts/static-tools'

changeLoc('#', false)

const kofiIcon = assets.images.icons.get('kofi')
</script>

<template lang="pug">
PageContainer
  SpinningBlahaj
  ContentContainer(last)
    template(#title)
      h1 Donations from Ko-Fi
      p This page is dedicated to all the persons who donated through Ko-Fi. Thanks for your support &lt;:3
    GridContainer(:rows="4")
      BlockCard(color="#C8DDFF")
        img(alt="Kofi", :src="kofiIcon")
        h3 michal
        p #[i gta4 crack reload fitgirl no virus]
      BlockCard(color="#C8DDFF")
        img(alt="Kofi", :src="kofiIcon")
        h3 fuckin dumb fox
        p #[i pogchamp]
      BlockCard(color="#C8DDFF")
          img(alt="Kofi" :src="kofiIcon")
          h3 imnotklaus
      BlockCard(color="#C8DDFF")
          img(alt="Kofi", :src="kofiIcon")
          h3 Henry Hiles
          p #[i Good luck with blahaj.land, keep up the good work Eryn!]
      BlockCard(color="#C8DDFF")
          img(alt="Kofi", :src="kofiIcon")
          h3 Matth. B
          p #[i keep it up]
      BlockCard(color="#C8DDFF")
        img(alt="Kofi", :src="kofiIcon")
        h3 Nerd
        p #[i Thanks for all ! You kinda saved my life]
      BlockCard(color="#C8DDFF")
        img(alt="Kofi", :src="kofiIcon")
        h3 6vz
      BlockCard(color="#C8DDFF")
        img(alt="Kofi", :src="kofiIcon")
        h3 Magnetron
        p #[i FIRST]
</template>
