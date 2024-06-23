<script lang="ts" setup>
import BulletpointCard from "@/components/cards/BulletpointCard.vue";
import { getAsset } from "blahaj-library";
</script>

<template>
  <BulletpointCard color="#DEAAFF"
    ><img :src="getAsset('icons/communication.png')" alt="Communication" />
    <h3>Communication services</h3>
    <p>E-mail, Fediverse, Send and <b>more</b>!</p>
  </BulletpointCard>
  <BulletpointCard color="#ECBCFD"
    ><img :src="getAsset('icons/cloud.png')" alt="Cloud" />
    <h3>Cloud storage</h3>
    <p>
      <b>1GB</b> of free storage. Get more storage, starting at
      <b>1€&sol;month</b>
    </p>
  </BulletpointCard>
  <BulletpointCard color="#FFCBF2"
    ><img :src="getAsset('icons/rosa.png')" alt="Pride flag" />
    <h3>Queer powered, queer friendly</h3>
    <p>Everybody is welcome here. You always will be.</p>
  </BulletpointCard>
</template>
