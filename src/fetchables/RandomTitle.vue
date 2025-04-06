<script setup lang="ts">
import { ref } from 'vue'

const randomTitle = ref('')

interface RandomTitles {
  randomTitles: Array<string>
}

try {
  const response = await fetch('https://assets.blahaj.land/json/titles.json')
  const fetchedData = await response.json()
  if ('randomTitles' in fetchedData) {
    let randomTitles = (fetchedData as RandomTitles).randomTitles
    randomTitle.value = randomTitles[Math.floor(Math.random() * randomTitles.length)]
  }
} catch (error) {
  console.error('Failed to fetch titles data:', error)
}
</script>

<template>
  <h1>{{ randomTitle }}</h1>
</template>
