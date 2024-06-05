<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { assets, changeLoc } from 'blahaj-library'
import BlockCard from '@/components/cards/BlockCard.vue'
import links from '@/assets/json/links.json'
import DonatorCard from '@/components/cards/DonatorCard.vue'
import axios from 'axios'

import BlahajButton from '@/components/buttons/BlahajButton.vue'

const fetchDataFromGql = async (url: string, query: any, variables: any) => {
  const response = await axios.post(
    url,
    {
      query: query,
      variables: variables
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  return response.status !== 200 ? {} : (response.data as Object)
}

const apiLink = 'https://api.opencollective.com/graphql/v2'
const donationsList: Ref<Array<OCNodes>> = ref([])
const projectSlug = 'blahajland'
const maxNbOfDonations = 8
const donationsQuery = `
query Transactions {
  account (slug: "${projectSlug}") {
    transactions(type: CREDIT, limit: ${maxNbOfDonations}) {
      nodes {
        fromAccount {
          name
          imageUrl
        }
        amount {
          value
        }
        description
      }
    }
  }
}`

interface OCNodes {
  fromAccount: {
    name: string
    imageUrl: string
  }
  amount: {
    value: number
  }
  description: string
}

interface OCDonators {
  data: {
    account: {
      transactions: {
        nodes: Array<OCNodes>
      }
    }
  }
}

let data = await fetchDataFromGql(apiLink, donationsQuery, {})
if ('data' in data) donationsList.value = (data as OCDonators).data.account.transactions.nodes

const getTier = (desc = '') => {
  let extractedTiers = desc.match(RegExp('^.*\\(([a-z]*)\\)$', 'mi'))
  return !extractedTiers
    ? ''
    : extractedTiers[1].charAt(0).toUpperCase() + extractedTiers[1].slice(1)
}
</script>

<template>
  <DonatorCard
    v-for="(e, i) in donationsList"
    :key="i"
    donation-currency="€"
    :donation-amount="e.amount.value"
    :donation-tier="getTier(e.description)"
    :donator-image="e.fromAccount.imageUrl"
    :donator-name="e.fromAccount.name"
  />
  <BlockCard v-if="donationsList.length === 0" color="var(--missing)">
    <h3>The list is empty... <br />Help us resolve that!</h3>
    <p>You can donate through OpenCollective!</p>
    <BlahajButton
      hover="var(--surface1)"
      background="var(--background)"
      @click="changeLoc(links.donate)"
    >
      <img alt="Donate" :src="assets.images.icons.get('donate')" />
      <p>Donate</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard v-if="donationsList.length >= maxNbOfDonations" color="#C8E7FF">
    <h3>And more !</h3>
    <p>Go to <b>OpenCollective</b> to see all the donations made so far.</p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.donate)"
    >
      <img alt="Donate" :src="assets.images.icons.get('donate')" />
      <p>Donate</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#ECBCFD">
    <h3>You're a Ko-Fi donator ?</h3>
    <p>If you made a donation through Ko-Fi, go check here.</p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="$router.push('/kofi')"
    >
      <img alt="KoFi" :src="assets.images.icons.get('kofi')" />
      <p>Ko-Fi donations</p>
    </BlahajButton>
  </BlockCard>
</template>
