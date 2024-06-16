<script setup lang="ts">
import links from '@/assets/data/links.json'
</script>

<template>
  <p>&copy; <b>eryn</b> Some rights reserved</p>
  <p>Website by <b>Blahaj Team</b></p>
  <a :href="links.documentation.content">Content Policy</a>
  <a :href="links.documentation.privacy">Privacy Policy</a>
  <a :href="links.documentation.rules">Rules</a>
  <a :href="links.portals.status"> Apps status </a>
</template>
