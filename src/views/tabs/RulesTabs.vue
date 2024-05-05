<script setup>
import { changeLoc } from '@/library/js/linkTools.js'
import TabButton from '@/components/TabButton.vue'
</script>

<template>
  <TabButton @click="changeLoc('#r1', false)">
    <p>Rules</p>
  </TabButton>
  <TabButton @click="changeLoc('#r2', false)">
    <p>Terms of Service</p>
  </TabButton>
</template>
