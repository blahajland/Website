<script setup>

import TabButton from '@/components/TabButton.vue'
</script>

<template>
  <div class="TabGroup">
    <TabButton>
      <p>Presentation</p>
    </TabButton>
    <TabButton>
      <p>Services</p>
    </TabButton>
    <TabButton>
      <p>User Sites</p>
    </TabButton>
    <TabButton>
      <p>Tiers</p>
    </TabButton>
    <TabButton>
      <p>Donations</p>
    </TabButton>
    <TabButton>
      <p>Rules & TOS</p>
    </TabButton>
  </div>
</template>

<style>
.TabGroup {
  position: sticky;
  top: 72px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px 0;
  gap: 8px;background: var(--background);
}
</style>