<script setup lang="ts">
import { changeLoc } from 'blahaj-library'
import links from '@/assets/data/links.json'
import BlockCard from '@/components/cards/BlockCard.vue'
import BlahajButton from '@/components/buttons/BlahajButton.vue'
</script>

<template>
  <BlockCard color="#ACD3DC" class="discover-card">
    <p>Take a tour and see <b>what's inside :3</b></p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc('#p1', false)"
      ><img alt="Blahaj" src="https://assets.blahaj.land/icons/open.png" />
      <p>Discover</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#F0C1B7" class="signup-card">
    <p>Create your account and <b>pass the vibe check &gt;:3</b></p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.portals.signup)"
      ><img alt="Sign up" src="https://assets.blahaj.land/icons/signup.png" />
      <p>Sign up</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#B1BCE1" class="discord-card">
    <p>Just want to hang around? Join our <b>Discord</b></p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.socials.discord)"
      ><img alt="Discord" src="https://assets.blahaj.land/icons/discord.png" />
      <p>Join</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#DCDCDC" class="login-card">
    <p>Already part of the community? Get access to <b>all the apps</b></p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.portals.login)"
      ><img alt="Log in" src="https://assets.blahaj.land/icons/login.png" />
      <p>Open Dashboard</p>
    </BlahajButton>
  </BlockCard>
</template>

<style lang="sass">
@media (max-width: 1200px)
  .login-card
    order: 1
  
  .discover-card
    order: 2
    
  .signup-card
    order: 3
    
  .discord-card
    order: 4
</style>