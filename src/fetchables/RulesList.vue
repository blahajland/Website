<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { fetchDataAsJson } from '@/library/ts/fetch-tools'
import fetchable from '@/assets/json/fetchable.json'
import BlockCard from '@/components/cards/BlockCard.vue'
import ContentContainer from '@/components/roots/ContentContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'

interface Rule {
  color: string
  title: string
  desc: string
}

interface RulesList {
  rules: Array<Rule>
  updated: string
}

const lastUpdated = ref('__/__/____')
const rulesList: Ref<Array<Rule>> = ref([])

let fetchedData = await fetchDataAsJson(fetchable.rules)
if ('rules' in fetchedData && 'updated' in fetchedData) {
  let rulesListObj = fetchedData as RulesList
  rulesList.value = rulesListObj.rules
  lastUpdated.value = rulesListObj.updated
}
</script>

<template lang="pug">
ContentContainer
  template(#title)
    h1#r1 Rules
    p Last updated : {{ lastUpdated }}
  GridContainer
    BlockCard(v-if="rulesList.length === 0", color="var(--missing)")
      h3 The list is empty... It shouldn't
      p If this card still appears, please contact the dev team.
    BlockCard(v-for="(e, i) in rulesList", :key="i", :color="e.color")
      h3 {{ e.title }}
      p(v-html="e.desc")
</template>
