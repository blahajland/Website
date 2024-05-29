<script setup lang="ts">
import { changeLoc } from '@/library/ts/common-tools'
import TabButton from '@/components/TabButton.vue'
</script>

<template lang="pug">
TabButton(@click="changeLoc('#p1', false)")
  p Why?
TabButton(@click="changeLoc('#p2', false)")
  p Services
TabButton(@click="changeLoc('#p3', false)")
  p User Sites
TabButton(@click="changeLoc('#p4', false)")
  p Tiers
TabButton(@click="changeLoc('#p5', false)")
  p Donations
</template>
