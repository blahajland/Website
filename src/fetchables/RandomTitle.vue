<script setup>
import { fetchDataAsJson } from '@/library/js/fetchTools.js'
import fetchable from '@/assets/json/fetchable.json'
import { ref } from 'vue'

const randomTitle = ref('')

let fetchedData = await fetchDataAsJson(fetchable.titles)
if (Object.prototype.hasOwnProperty.call(fetchedData, 'randomTitles')) {
  let randomTitles = fetchedData['randomTitles']
  randomTitle.value = randomTitles[Math.floor(Math.random() * randomTitles.length)]
}
</script>

<template>
  <h1>{{ randomTitle }}</h1>
</template>
