<script setup lang="ts">
import { assets, changeLoc } from 'blahaj-library'
import links from '@/assets/json/links.json'
import BlockCard from '@/components/cards/BlockCard.vue'
import BlahajButton from '@/components/buttons/BlahajButton.vue'
</script>

<template>
  <BlockCard color="#BCDBFF">
    <h2>Starter</h2>
    <h3>Free</h3>
    <p>
      &bull; Email, Send, Vaultwarden, Haste <b>&amp; more</b> <br />
      &bull; <b>1GB</b> of Nextcloud storage <br />
      &bull; One <b>hosted site</b>
    </p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.signup)"
      ><img alt="Sign up" :src="assets.images.icons.get('signup')" />
      <p>Join</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#FFCEF1">
    <h2>Supporter</h2>
    <h3>Starting at 1€/month</h3>
    <p>
      &bull; <b>10GB</b> of Nextcloud storage <br />
      &bull; <b>Unlimited</b> site hosting <br />
      &bull; All the advantages of the <b>Starter</b> tier
    </p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.donate)"
      ><img alt="Donate" :src="assets.images.icons.get('donate')" />
      <p>Donate</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#FFE5A3">
    <h2>Premium</h2>
    <h3>Starting at 5€/month</h3>
    <p>
      &bull; <b>250GB</b> of Nextcloud storage <br />
      &bull; <b>Discord bot</b> hosting <br />
      &bull; All the advantages of the <b>Supporter</b> tier
    </p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.donate)"
      ><img alt="Donate" :src="assets.images.icons.get('donate')" />
      <p>Donate</p>
    </BlahajButton>
  </BlockCard>
</template>
