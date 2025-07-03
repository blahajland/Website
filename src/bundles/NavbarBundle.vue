<script setup lang="ts">
import { changeLoc, themeService } from 'blahaj-library'
import links from '@/assets/data/links.json'
import BlahajButton from '@/components/buttons/BlahajButton.vue'
</script>

<template>
  <BlahajButton tabindex="1" @click="changeLoc(links.portals.donate)" >
    <img alt="Donate" src="https://assets.blahaj.land/icons/donate.png" />
    <p class="displayOnDesktop">Donate</p>
  </BlahajButton>
  <BlahajButton tabindex="2" @click="changeLoc(links.portals.signup)">
    <img alt="Sign up" src="https://assets.blahaj.land/glyhps/png/signup.png" />
    <p class="displayOnDesktop">Sign up</p>
  </BlahajButton>
  <BlahajButton tabindex="3" @click="changeLoc(links.portals.login)">
    <img alt="Log in" src="https://assets.blahaj.land/glyhps/png/login.png" />
    <p class="displayOnDesktop">Log in</p>
  </BlahajButton>
  <BlahajButton tabindex="4" @click="themeService.switchTheme()">
    <img alt="Change the theme" src="https://assets.blahaj.land/glyhps/png/theme.png" />
    <p class="displayOnDesktop">Theme</p>
  </BlahajButton>
</template>
