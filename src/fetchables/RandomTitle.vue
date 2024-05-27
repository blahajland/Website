<script setup lang="ts">
import { fetchDataAsJson } from '@/library/ts/fetch-tools'
import fetchable from '@/assets/json/fetchable.json'
import { ref } from 'vue'

const randomTitle = ref('')

interface RandomTitles {
  randomTitles: Array<string>
}

let fetchedData = await fetchDataAsJson(fetchable.titles)
if ('randomTitles' in fetchedData) {
  let randomTitles = (fetchedData as RandomTitles).randomTitles
  randomTitle.value = randomTitles[Math.floor(Math.random() * randomTitles.length)]
}
</script>

<template>
  <h1>{{ randomTitle }}</h1>
</template>
