<script setup>
import TabButton from '@/components/TabButton.vue'
import { changeLoc } from '@/assets/js/linkTools.js'
</script>

<template>
  <div class="TabGroup">
    <TabButton @click="changeLoc('#p1', false)">
      <p>Why ?</p>
    </TabButton>
    <TabButton @click="changeLoc('#p2', false)">
      <p>Services</p>
    </TabButton>
    <TabButton @click="changeLoc('#p3', false)">
      <p>User Sites</p>
    </TabButton>
    <TabButton @click="changeLoc('#p4', false)">
      <p>Tiers</p>
    </TabButton>
    <TabButton @click="changeLoc('#p5', false)">
      <p>Donations</p>
    </TabButton>
  </div>
</template>

<style>
.TabGroup {
  position: sticky;
  top: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  gap: 16px;
  background: var(--background);
}
</style>
