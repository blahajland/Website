<script setup>
import { ref } from 'vue'
import { fetchDataAsJson } from '@/library/js/fetchTools.js'
import fetchable from '@/assets/json/fetchable.json'
import RowCard from '@/components/cards/RowCard.vue'

const appList = ref([])

let fetchedData = await fetchDataAsJson(fetchable.apps)
if (Object.prototype.hasOwnProperty.call(fetchedData, 'apps'))
  appList.value = fetchedData['apps'].filter(
    (elem) => !(Object.prototype.hasOwnProperty.call(elem, 'noDisplay') && elem['noDisplay'])
  )

</script>

<template>
  <RowCard v-for="(e, i) in appList" :key="i" :color="e.color">
    <template #image>
      <img :alt="e.title" :src="e.img" />
    </template>
    <h3>{{ e.title }}</h3>
    <p v-html="e.desc"></p>
  </RowCard>
  <RowCard v-if="appList.length === 0" color="var(--missing)">
    <template #image>
      <img alt="Unknown" src="https://blahaj.land/static/images/apps/unknown.png" />
    </template>
    <h3>The list is empty... It shouldn't</h3>
    <p>If this card still appears, please contact the dev team.</p>
  </RowCard>
  <RowCard v-else color="#F3CBFF">
    <template #image>
      <img alt="More" src="https://blahaj.land/static/images/apps/more.png" />
    </template>
    <h3>And much...</h3>
    <p>...much much more !</p>
  </RowCard>
</template>
