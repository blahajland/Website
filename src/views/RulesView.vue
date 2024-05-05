<script setup>
import { changeLoc } from '@/library/js/linkTools.js'
import TabGroup from '@/components/containers/TabGroup.vue'
import TabButton from '@/components/TabButton.vue'
import SpinningBlahaj from '@/library/vue/SpinningBlahaj.vue'
import RulesList from '@/fetchables/RulesList.vue'
import TosList from '@/fetchables/TosList.vue'

changeLoc('#', false)
</script>

<template>
  <div class="ViewRules">
    <TabGroup>
      <TabButton @click="changeLoc('#r1', false)">
        <p>Rules</p>
      </TabButton>
      <TabButton @click="changeLoc('#r2', false)">
        <p>Terms of Service</p>
      </TabButton>
    </TabGroup>
    <SpinningBlahaj />
    <RulesList />
    <TosList />
  </div>
</template>
