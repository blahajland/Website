<script setup>
import { onBeforeMount, ref } from 'vue'
import { fetchDataAsJson } from '@/library/js/fetchTools.js'
import fetchable from '@/assets/json/fetchable.json'
import VerticalCard from '@/components/cards/VerticalCard.vue'
import PageContainer from '@/components/containers/PageContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'

const tLastUpdated = ref('__/__/____')
const tosList = ref([])

onBeforeMount(async () => {
  const data = await fetchDataAsJson(fetchable.tos)
  tosList.value = data['tos']
  tLastUpdated.value = data['updated']
})
</script>

<template>
  <PageContainer :last="true">
    <template #title>
      <h1 id="r2">Terms of Service</h1>
      <p>Last updated : {{ tLastUpdated }}</p>
    </template>
    <GridContainer>
      <VerticalCard v-for="(e, i) in tosList" :key="i" :color="e.color">
        <h3>{{ e.title }}</h3>
        <p v-html="e.desc"></p>
      </VerticalCard>
    </GridContainer>
  </PageContainer>
</template>
