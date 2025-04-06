<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { changeLoc } from 'blahaj-library'
import links from '@/assets/data/links.json'
import GridContainer from '@/components/containers/GridContainer.vue'
import BlahajButton from '@/components/buttons/BlahajButton.vue'
import BlockCard from '@/components/cards/BlockCard.vue'

interface Tier {
  color: string
  title: string
  price: string
  bulletpoints: string[]
  isFree: boolean
}

interface TiersList {
  tiers: Array<Tier>
}

const tiersList: Ref<Array<Tier>> = ref([])

try {
  const response = await fetch('https://assets.blahaj.land/json/tiers.json')
  const fetchedData = await response.json()
  if ('tiers' in fetchedData) {
    let convertedData = fetchedData as TiersList
    convertedData.tiers.forEach((e) => e.bulletpoints.forEach((e, i, l) => (l[i] = `&bull; ${e}`)))
    tiersList.value = convertedData.tiers
  }
} catch (error) {
  console.error('Failed to fetch tiers data:', error)
}

const createBulletpoints = (bulletPoints: Array<string>) => bulletPoints.join(' <br /> ')
</script>

<template>
  <GridContainer :rows="tiersList.length === 0 ? 3 : tiersList.length">
    <BlockCard v-if="tiersList.length === 0" color="var(--missing)">
      <h3>The list is empty... It shouldn't</h3>
      <p>If this section appears empty after reloading, please contact the dev team.</p>
    </BlockCard>
    <BlockCard v-for="(e, i) in tiersList" :key="i" :color="e.color">
      <h2>{{ e.title }}</h2>
      <h3>{{ e.price }}</h3>
      <p v-html="createBulletpoints(e.bulletpoints)"></p>
      <BlahajButton
        v-if="e.isFree"
        background="var(--background)"
        hover="var(--surface1)"
        @click="changeLoc(links.portals.signup)"
      >
        <img alt="Sign up" src="https://assets.blahaj.land/icons/signup.png" />
        <p>Join</p>
      </BlahajButton>
      <BlahajButton
        v-else
        background="var(--background)"
        hover="var(--surface1)"
        @click="changeLoc(links.portals.donate)"
      >
        <img alt="Donate" src="https://assets.blahaj.land/icons/donate.png" />
        <p>Donate</p>
      </BlahajButton>
    </BlockCard>
  </GridContainer>
</template>
