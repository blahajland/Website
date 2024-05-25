<script setup>
import { ref } from 'vue'
import { fetchDataAsJson } from '@/library/js/fetchTools.js'
import fetchable from '@/assets/json/fetchable.json'
import BlockCard from '@/components/cards/BlockCard.vue'
import ContentContainer from '@/components/roots/ContentContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'

const lastUpdated = ref('__/__/____')
const tosList = ref([])

let fetchedData = await fetchDataAsJson(fetchable.tos)
if (Object.prototype.hasOwnProperty.call(fetchedData, 'tos')) tosList.value = fetchedData['tos']
if (Object.prototype.hasOwnProperty.call(fetchedData, 'updated'))
  lastUpdated.value = fetchedData['updated']
</script>

<template>
  <ContentContainer :last="true">
    <template #title>
      <h1 id="r2">Terms of Service</h1>
      <p>Last updated : {{ lastUpdated }}</p>
    </template>
    <GridContainer>
      <BlockCard color="var(--missing)" v-if="tosList.length === 0">
        <h3>The list is empty... It shouldn't</h3>
        <p>If this card still appears, please contact the dev team.</p>
      </BlockCard>
      <BlockCard v-for="(e, i) in tosList" :key="i" :color="e.color">
        <h3>{{ e.title }}</h3>
        <p v-html="e.desc"></p>
      </BlockCard>
    </GridContainer>
  </ContentContainer>
</template>
