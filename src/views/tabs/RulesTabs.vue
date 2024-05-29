<script setup lang="ts">
import { changeLoc } from '@/library/ts/common-tools'
import TabButton from '@/components/TabButton.vue'
</script>

<template lang="pug">
TabButton(@click="changeLoc('#r1', false)")
  p Rules
TabButton(@click="changeLoc('#r2', false)")
  p Terms of Service
</template>
