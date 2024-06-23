<script lang="ts" setup>
import BulletpointCard from "@/components/cards/BulletpointCard.vue";
import { getAsset } from "blahaj-library";
</script>

<template>
  <BulletpointCard color="#B1BCE1"
    ><img :src="getAsset('icons/website.png')" alt="Website" />
    <h3>Host your own website for free!</h3>
    <p>
      With <b>blahaj.land</b> you can easily host your own static site for free!
    </p>
  </BulletpointCard>
  <BulletpointCard color="#ACD3DC"
    ><img :src="getAsset('icons/switch.png')" alt="Switch server" />
    <h3>Transition with ease</h3>
    <p>
      If you switch from <b>neocities.org</b>, <b>Github Pages</b>, or any other
      host, you'll get <b>15GB</b> of storage and a month of <b>Premium</b> for
      free.
    </p>
  </BulletpointCard>
  <BulletpointCard color="#C8E7FF"
    ><img :src="getAsset('icons/friend.png')" alt="Friends" />
    <h3>Bring your friends in!</h3>
    <p>
      For every person you invite, you'll get <b>5GB</b> of storage. If they
      make a donation, you'll get an extra <b>10GB</b>.
    </p>
  </BulletpointCard>
</template>
