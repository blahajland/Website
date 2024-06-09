<script setup lang="ts">
import links from '@/assets/json/links.json'
</script>

<template>
  <p>&copy; <b>eryn</b> Some rights reserved</p>
  <p>Website by <b>Blahaj Team</b></p>
  <a :href="links.content">Content Policy</a>
  <a :href="links.privacy">Privacy Policy</a>
  <a :href="links.rules">Rules</a>
  <a :href="links.status"> Apps status </a>
</template>
