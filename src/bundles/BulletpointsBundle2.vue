<script setup lang="ts">
import { assets } from 'blahaj-library'
import BulletpointCard from '@/components/cards/BulletpointCard.vue'
</script>

<template>
  <BulletpointCard color="#DEAAFF"
    ><img alt="Communication" :src="assets.images.icons.get('communication')" />
    <h3>Communication services</h3>
    <p>E-mail, Fediverse, Send and <b>more</b>!</p>
  </BulletpointCard>
  <BulletpointCard color="#ECBCFD"
    ><img alt="Cloud" :src="assets.images.icons.get('cloud')" />
    <h3>Cloud storage</h3>
    <p><b>1GB</b> of free storage. Get more storage, starting at <b>1€&sol;month</b></p>
  </BulletpointCard>
  <BulletpointCard color="#FFCBF2"
    ><img alt="Pride flag" :src="assets.images.icons.get('rosa')" />
    <h3>Queer powered, queer friendly</h3>
    <p>Everybody is welcome here. You always will be.</p>
  </BulletpointCard>
</template>

<style scoped lang="sass"></style>
