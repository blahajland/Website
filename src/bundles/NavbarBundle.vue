<script setup lang="ts">
import { assets, changeLoc, themeService } from 'blahaj-library'
import links from '@/assets/data/links.json'
import BlahajButton from '@/components/buttons/BlahajButton.vue'
</script>

<template>
  <BlahajButton @click="changeLoc(links.portals.donate)">
    <img alt="Donate" :src="assets.images.icons.get('donate')" />
    <p class="displayOnDesktop">Donate</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.portals.signup)">
    <img alt="Donate" :src="assets.images.icons.get('signup')" />
    <p class="displayOnDesktop">Sign up</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.portals.login)">
    <img alt="Donate" :src="assets.images.icons.get('login')" />
    <p class="displayOnDesktop">Log in</p>
  </BlahajButton>
  <BlahajButton @click="themeService.switchTheme()">
    <img alt="Donate" :src="assets.images.icons.get('theme')" />
    <p class="displayOnDesktop">Theme</p>
  </BlahajButton>
</template>
