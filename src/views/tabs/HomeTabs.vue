<script setup lang="ts">
import TabButton from '@/components/buttons/TabButton.vue'
import { changeLoc } from 'blahaj-library'
</script>

<template>
  <TabButton @click="changeLoc('#p1', false)">
    <p>Why?</p>
  </TabButton>
  <TabButton @click="changeLoc('#p2', false)">
    <p>Services</p>
  </TabButton>
  <TabButton @click="changeLoc('#p3', false)">
    <p>Tiers</p>
  </TabButton>
  <TabButton @click="changeLoc('#p4', false)">
    <p>User Sites</p>
  </TabButton>
  <TabButton @click="changeLoc('#p5', false)">
    <p>Donations</p>
  </TabButton>
</template>
