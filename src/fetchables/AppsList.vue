<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { fetchDataAsJson } from '@/library/ts/fetch-tools'
import fetchable from '@/assets/json/fetchable.json'
import AppCard from '@/components/cards/AppCard.vue'
import { assets } from '@/library/ts/static-tools'

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

<template lang="pug">
AppCard(v-for="(e, i) in appList", :key="i", :color="e.color")
  template(#image)
    img(:alt="e.title", :src="e.img")
  h3 {{ e.title }}
  p(v-html="e.desc")
AppCard(v-if="appList.length === 0", color="var(--missing)")
  template(#image)
    img(alt="Unknown", :src="assets.images.apps.get('unknown')")
  h3 The list is empty... It shouldn't
  p If this card still appears, please contact the dev team.
AppCard(v-else, color="#F3CBFF")
  template(#image)
    img(alt="More" :src="assets.images.apps.get('more')")
  h3 And much...
  p ...much much more !
</template>
