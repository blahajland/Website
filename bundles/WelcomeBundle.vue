<script lang="ts" setup>
import { assets } from "blahaj-library";
import links from "@/assets/data/links.json";
import BlockCard from "@/components/cards/BlockCard.vue";
import BlahajButton from "@/components/buttons/BlahajButton.vue";
</script>

<template>
  <BlockCard color="#ACD3DC">
    <p>Take a tour and see <b>what's inside :3</b></p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      href="#p1"
    >
      <img :src="assets.images.icons.get('open')" alt="Blahaj" />
      <p>Discover</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#F0C1B7">
    <p>Create your account and <b>pass the vibe check &gt;:3</b></p>
    <BlahajButton
      :href="links.portals.signup"
      background="var(--background)"
      hover="var(--surface1)"
      ><img :src="assets.images.icons.get('signup')" alt="Sign up" />
      <p>Sign up</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#B1BCE1">
    <p>Just want to hang around? Join our <b>Discord</b></p>
    <BlahajButton
      :href="links.socials.discord"
      background="var(--background)"
      hover="var(--surface1)"
      ><img :src="assets.images.icons.get('discord')" alt="Discord" />
      <p>Join</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#DCDCDC">
    <p>Already part of the community? Get access to <b>all the apps</b></p>
    <BlahajButton
      :href="links.portals.login"
      background="var(--background)"
      hover="var(--surface1)"
      ><img :src="assets.images.icons.get('login')" alt="Log in" />
      <p>Open Dashboard</p>
    </BlahajButton>
  </BlockCard>
</template>
