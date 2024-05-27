<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { fetchDataAsJson } from '@/library/ts/fetch-tools'
import fetchable from '@/assets/json/fetchable.json'
import BlockCard from '@/components/cards/BlockCard.vue'
import ContentContainer from '@/components/roots/ContentContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'

interface Term {
  color: string
  title: string
  desc: string
}

interface TermsOfService {
  tos: Array<Term>
  updated: string
}

const lastUpdated = ref('__/__/____')
const tosList: Ref<Array<Term>> = ref([])

let fetchedData = await fetchDataAsJson(fetchable.tos)
if ('tos' in fetchedData && 'updated' in fetchedData) {
  let tosListObj = fetchedData as TermsOfService
  tosList.value = tosListObj.tos
  lastUpdated.value = tosListObj.updated
}
</script>

<template>
  <ContentContainer last>
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
