<script setup lang="ts">
import TabButton from '@/components/buttons/TabButton.vue'
import { changeLoc } from 'blahaj-library'
</script>

<template>
  <TabButton @click="changeLoc('#r1', false)">
    <p>Rules</p>
  </TabButton>
  <TabButton @click="changeLoc('#r2', false)">
    <p>Terms of Service</p>
  </TabButton>
</template>
