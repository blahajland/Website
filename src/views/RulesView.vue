<script setup>
import { changeLoc } from '@/library/js/linkTools.js'
import SpinningBlahaj from '@/library/vue/SpinningBlahaj.vue'
import RulesList from '@/fetchables/RulesList.vue'
import TosList from '@/fetchables/TosList.vue'

changeLoc('#', false)
</script>

<template>
  <div class="ViewRules">
    <SpinningBlahaj />
    <RulesList />
    <TosList />
  </div>
</template>
