<script lang="ts" setup>
import links from "@/assets/data/links.json";
import CustomFooter from "@/components/CustomFooter.vue";
import { assets } from "blahaj-library";
</script>

<template>
  <CustomFooter>
    <div>
      <h2>About</h2>
      <p>&copy; <b>eryn</b> Some rights reserved</p>
      <p>Website by <b>Blahaj Team</b></p>
      <span
        >Blahaj Land is a free service offering everything from email and
        Nextcloud to static page hosting, a fast and reliable git forge,
        collaborative HedgeDoc documents, and even privacy-focused video
        streaming with Piped and Invidious!</span
      >
    </div>
    <div>
      <h2>Socials</h2>
      <a :href="links.socials.mail">
        <img :src="assets.images.icons.get('mail')" alt="Mail" />
        <p>E-mail</p>
      </a>
      <a :href="links.socials.discord">
        <img :src="assets.images.icons.get('discord')" alt="Discord" />
        <p>Discord</p>
      </a>
      <a :href="links.socials.github">
        <img :src="assets.images.icons.get('github')" alt="GitHub" />
        <p>GitHub</p>
      </a>
      <a :href="links.socials.tiktok">
        <img :src="assets.images.icons.get('tiktok')" alt="TikTok" />
        <p>TikTok</p>
      </a>
    </div>
    <div>
      <h2>Ressources</h2>
      <a :href="links.documentation.content">Content Policy</a>
      <a :href="links.documentation.privacy">Privacy Policy</a>
      <a :href="links.documentation.rules">Rules</a>
      <a :href="links.documentation.credits">Credits</a>
    </div>
    <div>
      <h2>Others</h2>
      <a :href="links.portals.status"> Apps status </a>
    </div>
  </CustomFooter>
</template>
