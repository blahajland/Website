<script lang="ts" setup>
import BulletpointCard from "@/components/cards/BulletpointCard.vue";
import { getAsset } from "blahaj-library";
</script>

<template>
  <BulletpointCard color="#DEAAFF"
    ><NuxtImg :src="getAsset('icons/communication.svg')" alt="Communication" />
    <h3>Communication services</h3>
    <p>E-mail, Fediverse, Send and <b>more</b>!</p>
  </BulletpointCard>
  <BulletpointCard color="#ECBCFD"
    ><NuxtImg :src="getAsset('icons/cloud.svg')" alt="Cloud" />
    <h3>Cloud storage</h3>
    <p>
      <b>1GB</b> of free storage. Get more storage, starting at
      <b>1€&sol;month</b>
    </p>
  </BulletpointCard>
  <BulletpointCard color="#FFCBF2"
    ><NuxtImg :src="getAsset('icons/rosa.svg')" alt="Pride flag" />
    <h3>Queer powered, queer friendly</h3>
    <p>Everybody is welcome here. You always will be.</p>
  </BulletpointCard>
</template>
