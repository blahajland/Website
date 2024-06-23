<script lang="ts" setup>
import blahajInfo from "@/assets/data/info";
import links from "@/assets/data/links";
import CustomFooter from "@/components/CustomFooter.vue";
import { getAsset } from "blahaj-library";
</script>

<template>
  <CustomFooter>
    <div>
      <h2>About</h2>
      <p>&copy; <b>eryn</b> Some rights reserved</p>
      <p>Website by <b>Blahaj Team</b></p>
      <span> {{ blahajInfo.description }} </span>
    </div>
    <div>
      <h2>Socials</h2>
      <a :href="links.socials.mail">
        <img :src="getAsset('icons/mail.png')" alt="Mail" />
        <p>E-mail</p>
      </a>
      <a :href="links.socials.discord">
        <img :src="getAsset('icons/discord.png')" alt="Discord" />
        <p>Discord</p>
      </a>
      <a :href="links.socials.github">
        <img :src="getAsset('icons/github.png')" alt="GitHub" />
        <p>GitHub</p>
      </a>
      <a :href="links.socials.tiktok">
        <img :src="getAsset('icons/tiktok.png')" alt="TikTok" />
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
