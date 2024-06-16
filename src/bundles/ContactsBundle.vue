<script setup lang="ts">
import { assets, changeLoc } from 'blahaj-library'
import links from '@/assets/data/links.json'
import BlahajButton from '@/components/buttons/BlahajButton.vue'
</script>

<template>
  <BlahajButton @click="changeLoc(links.socials.mail)"
    ><img alt="Mail" :src="assets.images.icons.get('mail')" />
    <p class="displayOnDesktop">E-mail</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.socials.discord)"
    ><img alt="Discord" :src="assets.images.icons.get('discord')" />
    <p class="displayOnDesktop">Discord</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.socials.github)"
    ><img alt="GitHub" :src="assets.images.icons.get('github')" />
    <p class="displayOnDesktop">GitHub</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.socials.tiktok)"
    ><img alt="TikTok" :src="assets.images.icons.get('tiktok')" />
    <p class="displayOnDesktop">TikTok</p>
  </BlahajButton>
</template>
