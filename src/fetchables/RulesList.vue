<script setup>
import { onBeforeMount, ref } from 'vue'
import { fetchDataAsJson } from '@/assets/js/fetchTools.js'
import links from '@/assets/json/links.json'
import VerticalCard from '@/components/cards/VerticalCard.vue'
import PageContainer from '@/components/containers/PageContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'

const rLastUpdated = ref('__/__/____')
const rulesList = ref([])

onBeforeMount(async () => {
  const data = await fetchDataAsJson(links.rules)
  rulesList.value = data['rules']
  rLastUpdated.value = data['updated']
})
</script>

<template>
  <PageContainer>
    <template #title>
      <h1 id="r1">Rules</h1>
      <p>Last updated : {{ rLastUpdated }}</p>
    </template>
    <GridContainer>
      <VerticalCard v-for="(e, i) in rulesList" :key="i" :color="e.color">
        <h3>{{ e.title }}</h3>
        <p v-html="e.desc"></p>
      </VerticalCard>
    </GridContainer>
  </PageContainer>
</template>
