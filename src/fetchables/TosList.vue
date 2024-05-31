<script setup lang="ts">
import { type Ref, ref } from 'vue'

import BlockCard from '@/components/cards/BlockCard.vue'
import ContentContainer from '@/components/roots/ContentContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import { assets } from '@/library/ts/static-tools'

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

<template lang="pug">
ContentContainer(last)
  template(#title)
    h1#r2 Terms of Service
    p Last updated : {{ lastUpdated }}
  GridContainer
    BlockCard(color='var(--missing)', v-if='tosList.length === 0')
      h3 The list is empty... It shouldn't
      p If this card still appears, please contact the dev team.
    BlockCard(v-for='(e, i) in tosList', :key='i', :color='e.color')
      h3 {{ e.title }}
      p(v-html='e.desc')
</template>
