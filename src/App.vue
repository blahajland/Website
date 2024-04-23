<script setup>
import TopBar from '@/components/static/TopBar.vue'
import TabGroup from '@/components/static/TabGroup.vue'
import CustomFooter from '@/components/CustomFooter.vue'
</script>

<template>
  <TopBar />
  <TabGroup />
  <RouterView>
  </RouterView>
  <CustomFooter>
    <p>&copy; <a>eryn</a> Some rights reserved</p>
    <p>Made by <a>Nerd</a></p>
    <a>Rules & TOS</a>
  </CustomFooter>
</template>

<style>

</style>
