<script setup lang="ts">
import { type Ref, ref } from 'vue'
import DOMPurify from 'dompurify'
import AppCard from '@/components/cards/AppCard.vue'
import { assets } from 'blahaj-library'
import ExpandableContainer from '@/components/containers/ExpandableContainer.vue'

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

try {
  const response = await fetch('https://assets.blahaj.land/json/apps.json')
  const fetchedData = await response.json()
  if ('apps' in fetchedData)
    appList.value = (fetchedData as AppsList).apps.filter(
      (elem: AppDescriptor) => !('noDisplay' in elem && elem['noDisplay'])
    )
} catch (error) {
  console.error('Failed to fetch apps data:', error)
}
</script>

<template>
  <ExpandableContainer>
    <AppCard v-for="(e, i) in appList" :key="i" :color="e.color">
      <template #image>
        <img :alt="e.title" :src="e.img" />
      </template>
      <h3>{{ e.title }}</h3>
      <p v-html="DOMPurify.sanitize(e.desc)"></p>
    </AppCard>
    <AppCard v-if="appList.length === 0" color="var(--missing)">
      <template #image>
        <img alt="Unknown" src="https://assets.blahaj.land/apps/unknown.png" />
      </template>
      <h3>The list is empty... It shouldn't</h3>
      <p>If this section appears empty after reloading, please contact the dev team.</p>
    </AppCard>
    <AppCard v-else color="#F3CBFF">
      <template #image>
        <img alt="More" src="https://assets.blahaj.land/apps/more.png" />
      </template>
      <h3>And much...</h3>
      <p>...much much more!</p>
    </AppCard>
  </ExpandableContainer>
</template>
