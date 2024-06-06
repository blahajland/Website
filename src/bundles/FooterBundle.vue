<script setup lang="ts">
import links from '@/assets/json/links.json'
</script>

<template>
  <p>&copy; <b>eryn</b> Some rights reserved</p>
  <p>Website by <b>Blahaj Team</b></p>
  <RouterLink to="/credits"> Credits </RouterLink>
  <RouterLink to="/rules"> Rules & TOS </RouterLink>
  <a :href="links.status"> Apps status </a>
</template>
