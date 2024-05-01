<script setup>
import { onBeforeMount, ref } from 'vue'
import { fetchDataAsJson } from '@/assets/js/fetchTools.js'
import links from '@/assets/json/links.json'
import RowCard from '@/components/cards/RowCard.vue'

const appList = ref([])
onBeforeMount(async () => {
  let data = await fetchDataAsJson(links.apps, 'apps')
  appList.value = data.filter(
    (elem) => !(Object.prototype.hasOwnProperty.call(elem, 'noDisplay') && elem['noDisplay'])
  )
})
</script>

<template>
  <RowCard v-for="(e, i) in appList" :key="i" :color="e.color">
    <template #image>
      <img :src="e.img" :alt="e.title" />
    </template>
    <h3>{{ e.title }}</h3>
    <p v-html="e.desc"></p>
  </RowCard>
</template>
