<script setup lang="ts">
import { ref } from 'vue'
import { assets } from 'blahaj-library'

const randomTitle = ref('')

interface RandomTitles {
  randomTitles: Array<string>
}

let fetchedData = await assets.json.get('titles')
if ('randomTitles' in fetchedData) {
  let randomTitles = (fetchedData as RandomTitles).randomTitles
  randomTitle.value = randomTitles[Math.floor(Math.random() * randomTitles.length)]
}
</script>

<template>
  <h1>{{ randomTitle }}</h1>
</template>
