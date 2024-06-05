<script setup lang="ts">
import { assets, changeLoc } from 'blahaj-library'
import links from '@/assets/json/links.json'
import BlahajButton from '@/components/buttons/BlahajButton.vue'
</script>

<template>
  <BlahajButton @click="changeLoc(links.mail)"
    ><img alt="Mail" :src="assets.images.icons.get('mail')" />
    <p class="displayOnDesktop">E-mail</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.discord)"
    ><img alt="Discord" :src="assets.images.icons.get('discord')" />
    <p class="displayOnDesktop">Discord</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.github)"
    ><img alt="GitHub" :src="assets.images.icons.get('github')" />
    <p class="displayOnDesktop">GitHub</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.tiktok)"
    ><img alt="TikTok" :src="assets.images.icons.get('tiktok')" />
    <p class="displayOnDesktop">TikTok</p>
  </BlahajButton>
</template>

<style scoped lang="sass"></style>
