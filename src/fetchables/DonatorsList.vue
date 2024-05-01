<script setup>
import SmallCard from '@/components/cards/SmallCard.vue'
import { onBeforeMount, ref } from 'vue'
import { fetchDataAsJson } from '@/library/js/fetchTools.js'
import fetchable from '@/assets/json/fetchable.json'

const donationsList = ref([])

onBeforeMount(async () => {
  donationsList.value = await fetchDataAsJson(fetchable.donations, 'donations')
})
</script>

<template>
  <SmallCard v-for="(e, i) in donationsList" :key="i" :color="e.color" orientation="column">
    <h3>{{ e.title }}</h3>
    <p v-if="e.desc !== ''" :title="e.desc">
      <i>{{ e.desc }}</i>
    </p>
  </SmallCard>
</template>
