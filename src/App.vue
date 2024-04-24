<script setup>
import TopBar from '@/static/TopBar.vue'
import CustomFooter from '@/components/CustomFooter.vue'
import { setThemeFromCookie } from '@/assets/js/themeTools.js'

setThemeFromCookie()
</script>

<template>
  <TopBar />
  <RouterView></RouterView>
  <CustomFooter>
    <p>&copy; <a href="https://blog.blahaj.land/">eryn</a> Some rights reserved</p>
    <p>Made by <a href="https://github.com/imalonelynerd">Nerd</a></p>
    <RouterLink to="/rules">Rules & TOS</RouterLink>
  </CustomFooter>
</template>

<style></style>
