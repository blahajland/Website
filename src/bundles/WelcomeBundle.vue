<script setup lang="ts">
import { assets, changeLoc } from 'blahaj-library'
import links from '@/assets/json/links.json'
import BlockCard from '@/components/cards/BlockCard.vue'
import BlahajButton from '@/components/buttons/BlahajButton.vue'
</script>

<template>
  <BlockCard color="#ACD3DC">
    <p>Take a tour and see <b>what's inside :3</b></p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc('#p1', false)"
      ><img alt="Blahaj" :src="assets.images.icons.get('open')" />
      <p>Discover</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#F0C1B7">
    <p>Create your account and <b>pass the vibe check &gt;:3</b></p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.signup)"
      ><img alt="Sign up" :src="assets.images.icons.get('signup')" />
      <p>Sign up</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#B1BCE1">
    <p>Just want to hang around? Join our <b>Discord</b></p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.discord)"
      ><img alt="Discord" :src="assets.images.icons.get('discord')" />
      <p>Join</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#DCDCDC">
    <p>Already part of the community? Get access to <b>all the apps</b></p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.login)"
      ><img alt="Log in" :src="assets.images.icons.get('login')" />
      <p>Open Dashboard</p>
    </BlahajButton>
  </BlockCard>
</template>
