<script setup>
import { fetchDataAsJson } from '@/library/js/fetchTools.js'
import fetchable from '@/assets/json/fetchable.json'
import { onBeforeMount, ref } from 'vue'

const randomTitle = ref(':3')

onBeforeMount(async () => {
  const randomTitles = await fetchDataAsJson(fetchable.titles, 'randomTitles')
  randomTitle.value = randomTitles[Math.floor(Math.random() * randomTitles.length)]
})
</script>

<template>
  <h1>{{ randomTitle }}</h1>
</template>
