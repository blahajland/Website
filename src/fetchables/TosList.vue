<script setup lang="ts">
import { type Ref, ref } from 'vue'
import DOMPurify from 'dompurify'
import BlockCard from '@/components/cards/BlockCard.vue'
import ContentContainer from '@/components/frames/ContentFrame.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import { assets } from 'blahaj-library'

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

let fetchedData = await assets.json.get('tos')
if ('tos' in fetchedData && 'updated' in fetchedData) {
  let tosListObj = fetchedData as TermsOfService
  tosList.value = tosListObj.tos
  lastUpdated.value = tosListObj.updated
}
</script>

<template>
  <ContentContainer>
    <template #title>
      <h1 id="r1">Rules</h1>
      <p>Last updated : {{ lastUpdated }}</p>
    </template>
    <GridContainer>
      <BlockCard v-if="tosList.length === 0" color="var(--missing)">
        <h3>The list is empty... It shouldn't</h3>
        <p>If this card appears empty after reloading, please contact the dev team.</p>
      </BlockCard>
      <BlockCard v-for="(e, i) in tosList" :key="i" :color="e.color">
        <h3>{{ e.title }}</h3>
        <p v-html="DOMPurify.sanitize(e.desc)"></p>
      </BlockCard>
    </GridContainer>
  </ContentContainer>
</template>
