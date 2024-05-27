<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { fetchDataAsJson } from '@/library/ts/fetch-tools'
import fetchable from '@/assets/json/fetchable.json'
import AppCard from '@/components/cards/AppCard.vue'

interface AppDescriptor {
  color: string
  img: string
  title: string
  desc: string
  noDisplay?: boolean
  yuno?: string
}

interface AppsList {
  apps: Array<AppDescriptor>
}

const appList: Ref<Array<AppDescriptor>> = ref([])

let fetchedData = await fetchDataAsJson(fetchable.apps)
if ('apps' in fetchedData)
  appList.value = (fetchedData as AppsList).apps.filter(
    (elem: AppDescriptor) => !('noDisplay' in elem && elem['noDisplay'])
  )
</script>

<template>
  <AppCard v-for="(e, i) in appList" :key="i" :color="e.color">
    <template #image>
      <img :alt="e.title" :src="e.img" />
    </template>
    <h3>{{ e.title }}</h3>
    <p v-html="e.desc"></p>
  </AppCard>
  <AppCard v-if="appList.length === 0" color="var(--missing)">
    <template #image>
      <img alt="Unknown" src="https://blahaj.land/static/images/apps/unknown.png" />
    </template>
    <h3>The list is empty... It shouldn't</h3>
    <p>If this card still appears, please contact the dev team.</p>
  </AppCard>
  <AppCard v-else color="#F3CBFF">
    <template #image>
      <img alt="More" src="https://blahaj.land/static/images/apps/more.png" />
    </template>
    <h3>And much...</h3>
    <p>...much much more !</p>
  </AppCard>
</template>
