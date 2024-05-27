<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { fetchDataFromGql } from '@/library/ts/fetch-tools'
import fetchable from '@/assets/json/fetchable.json'
import BlahajButton from '@/library/vue/BlahajButton.vue'
import BlockCard from '@/components/cards/BlockCard.vue'
import { changeLoc } from '@/library/ts/link-tools'
import links from '@/assets/json/links.json'
import DonatorCard from '@/components/cards/DonatorCard.vue'

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

let data = await fetchDataFromGql(fetchable.donations, donationsQuery, {})
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
    :donation-amount="e.amount.value"
    :donation-tier="getTier(e.description)"
    :donator-image="e.fromAccount.imageUrl"
    :donator-name="e.fromAccount.name"
  />
  <BlockCard v-if="donationsList.length === 0" color="var(--missing)">
    <h3>The list is empty...<br />Help us resolve that!</h3>
    <p>You can donate through OpenCollective!</p>
    <BlahajButton
      @click="changeLoc(links.donate)"
      background="var(--background)"
      hover="var(--surface1)"
    >
      <img alt="Donate" src="https://blahaj.land/static/images/icons/donate.png" />
      <p>Donate</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#C8E7FF" v-if="donationsList.length >= maxNbOfDonations">
    <h3>And more !</h3>
    <p>Go to <b>OpenCollective</b> to see all the donations made so far.</p>
    <BlahajButton
      @click="changeLoc(links.donate)"
      background="var(--background)"
      hover="var(--surface1)"
    >
      <img alt="Donate" src="https://blahaj.land/static/images/icons/donate.png" />
      <p>Donate</p>
    </BlahajButton>
  </BlockCard>
  <BlockCard color="#ECBCFD">
    <h3>You're a Ko-Fi donator ?</h3>
    <p>If you made a donation through Ko-Fi, go check here.</p>
    <BlahajButton
      @click="$router.push('/kofi')"
      background="var(--background)"
      hover="var(--surface1)"
    >
      <img alt="KoFi" src="https://blahaj.land/static/images/icons/kofi.png" />
      <p>Ko-Fi donations</p>
    </BlahajButton>
  </BlockCard>
</template>
