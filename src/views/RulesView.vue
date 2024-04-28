<script setup>
import { changeLoc } from '@/assets/js/linkTools.js'
import TabGroup from '@/components/containers/TabGroup.vue'
import TabButton from '@/components/TabButton.vue'
import PageContainer from '@/components/containers/PageContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import ContentBlock from '@/components/cards/VerticalCard.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import { onBeforeMount, ref } from 'vue'
import { fetchDataAsJson } from '@/assets/js/fetchTools.js'

import links from '@/assets/json/links.json'

const rLastUpdated = ref('__/__/____')
const tLastUpdated = ref('__/__/____')
const rulesList = ref([])
const tosList = ref([])

onBeforeMount(async () => {
  rulesList.value = await fetchDataAsJson(links.rules)
  tosList.value = await fetchDataAsJson(links.tos)
  rLastUpdated.value = rulesList.value['updated']
  tLastUpdated.value = tosList.value['updated']
})

changeLoc('#', false)
</script>

<template>
  <div class="ViewRules">
    <TabGroup>
      <TabButton @click="changeLoc('#r1', false)">
        <p>Rules</p>
      </TabButton>
      <TabButton @click="changeLoc('#r2', false)">
        <p>Terms of Service</p>
      </TabButton>
    </TabGroup>
    <SpinningBlahaj />
    <PageContainer>
      <template #title>
        <h1 id="r1">Rules</h1>
        <p>Last updated : {{ rLastUpdated }}</p>
      </template>
      <GridContainer>
        <ContentBlock v-for="(e, i) in rulesList['rules']" :key="i" :color="e.color">
          <h3>{{ e.title }}</h3>
          <p v-html="e.desc"></p>
        </ContentBlock>
      </GridContainer>
    </PageContainer>
    <PageContainer :last="true">
      <template #title>
        <h1 id="r2">Terms of Service</h1>
        <p>Last updated : {{ tLastUpdated }}</p>
      </template>
      <GridContainer>
        <ContentBlock v-for="(e, i) in tosList['tos']" :key="i" :color="e.color">
          <h3>{{ e.title }}</h3>
          <p v-html="e.desc"></p>
        </ContentBlock>
      </GridContainer>
    </PageContainer>
  </div>
</template>

<style></style>
