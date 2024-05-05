<script setup>
import { onBeforeMount, ref } from 'vue'
import { fetchDataAsJson } from '@/library/js/fetchTools.js'
import fetchable from '@/assets/json/fetchable.json'
import RowCard from '@/components/cards/RowCard.vue'

const appList = ref([])
onBeforeMount(async () => {
  let data = await fetchDataAsJson(fetchable.apps, 'apps')
  appList.value = data.filter(
    (elem) => !(Object.prototype.hasOwnProperty.call(elem, 'noDisplay') && elem['noDisplay'])
  )
})
</script>

<template>
  <RowCard v-for="(e, i) in appList" :key="i" :color="e.color">
    <template #image>
      <img :alt="e.title" :src="e.img" />
    </template>
    <h3>{{ e.title }}</h3>
    <p v-html="e.desc"></p>
  </RowCard>
</template>
