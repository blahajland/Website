<script setup>
import { fetchDataAsJson } from '@/assets/js/fetchTools.js'
import links from '@/assets/json/links.json'
import { onBeforeMount, ref } from 'vue'

const randomTitle = ref(':3')

onBeforeMount(async () => {
  const randomTitles = await fetchDataAsJson(links.titles, 'randomTitles')
  randomTitle.value = randomTitles[Math.floor(Math.random() * randomTitles.length)]
})
</script>

<template>
  <h1>{{ randomTitle }}</h1>
</template>
