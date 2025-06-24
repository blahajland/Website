<script setup lang="ts">
import { changeLoc } from 'blahaj-library'
import links from '@/assets/data/links.json'
import BlahajButton from '@/components/buttons/BlahajButton.vue'
</script>

<template>
  <BlahajButton @click="changeLoc(links.socials.mail)"
    ><img alt="Mail" src="https://assets.blahaj.land/glyhps/png/mail.png" />
    <p class="displayOnDesktop">E-mail</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.socials.discord)"
    ><img alt="Discord" src="https://assets.blahaj.land/glyhps/png/discord.png" />
    <p class="displayOnDesktop">Discord</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.socials.github)"
    ><img alt="GitHub" src="https://assets.blahaj.land/glyhps/png/github.png" />
    <p class="displayOnDesktop">GitHub</p>
  </BlahajButton>
  <BlahajButton @click="changeLoc(links.socials.tiktok)"
    ><img alt="TikTok" src="https://assets.blahaj.land/glyhps/png/tiktok.png" />
    <p class="displayOnDesktop">TikTok</p>
  </BlahajButton>
</template>
