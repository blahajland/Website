<script lang="ts" setup>
import { assets } from "blahaj-library";
import BulletpointCard from "@/components/cards/BulletpointCard.vue";
</script>

<template>
  <BulletpointCard color="#DEAAFF"
    ><img :src="assets.images.icons.get('communication')" alt="Communication" />
    <h3>Communication services</h3>
    <p>E-mail, Fediverse, Send and <b>more</b>!</p>
  </BulletpointCard>
  <BulletpointCard color="#ECBCFD"
    ><img :src="assets.images.icons.get('cloud')" alt="Cloud" />
    <h3>Cloud storage</h3>
    <p>
      <b>1GB</b> of free storage. Get more storage, starting at
      <b>1€&sol;month</b>
    </p>
  </BulletpointCard>
  <BulletpointCard color="#FFCBF2"
    ><img :src="assets.images.icons.get('rosa')" alt="Pride flag" />
    <h3>Queer powered, queer friendly</h3>
    <p>Everybody is welcome here. You always will be.</p>
  </BulletpointCard>
</template>
