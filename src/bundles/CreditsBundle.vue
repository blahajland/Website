<script setup lang="ts">
import { changeLoc } from 'blahaj-library'
import BlockCard from '@/components/cards/BlockCard.vue'
import BlahajButton from '@/components/buttons/BlahajButton.vue'
</script>

<template>
  <BlockCard color="#D4D9FF">
    <img src="https://assets.blahaj.land/icons/cloud.png" alt="Cloud" />
    <h3>Services</h3>
    <p>Hosted by <b>eryn</b></p>
    <BlahajButton
      background="var(--background)"
      @click="changeLoc('https://www.github.com/hericiumvevo/')"
    >
      <img src="https://assets.blahaj.land/icons/github.png" alt="Link" />
      <p>GitHub</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#FFD4D9">
    <img src="https://assets.blahaj.land/icons/website.png" alt="Website" />
    <h3>Website</h3>
    <p>by <b>Nerd</b></p>
    <BlahajButton
      background="var(--background)"
      @click="changeLoc('https://www.github.com/imalonelynerd/')"
    >
      <img src="https://assets.blahaj.land/icons/github.png" alt="Link" />
      <p>GitHub</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#F6D4FF">
    <img src="https://assets.blahaj.land/icons/open.png" alt="Website" />
    <h3>Icons</h3>
    <p>by <b>Nerd</b></p>
    <BlahajButton
      background="var(--background)"
      @click="changeLoc('https://www.github.com/imalonelynerd/')"
    >
      <img src="https://assets.blahaj.land/icons/github.png" alt="Link" />
      <p>GitHub</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#ACD3DC">
    <img src="https://assets.blahaj.land/pictures/haj.png" alt="Blobhaj" />
    <h3>"Blobhaj" icons</h3>
    <p>by <b>heatherhorns</b></p>
    <BlahajButton
      background="var(--background)"
      @click="changeLoc('https://www.reddit.com/user/heatherhorns/')"
    >
      <img src="https://assets.blahaj.land/icons/website.png" alt="Reddit" />
      <p>Reddit</p>
    </BlahajButton>
  </BlockCard>
</template>
