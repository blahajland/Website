<script setup>
import { ref } from 'vue'
import { fetchDataFromGql } from '@/library/js/fetchTools.js'
import fetchable from '@/assets/json/fetchable.json'
import BlahajButton from '@/library/vue/BlahajButton.vue'
import VerticalCard from '@/components/cards/VerticalCard.vue'
import { changeLoc } from '@/library/js/linkTools.js'
import links from '@/assets/json/links.json'

const donationsList = ref([])
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
      }
    }
  }
}`

let data = await fetchDataFromGql(fetchable.donations, donationsQuery, {})
if (Object.prototype.hasOwnProperty.call(data, 'data')) {
  donationsList.value = data['data']['account']['transactions']['nodes']
}
</script>

<template>
  <VerticalCard v-for="(e, i) in donationsList" :key="i" color="#E2EDFF">
    <img
      :src="e['fromAccount']['imageUrl']"
      style="border-radius: var(--radius-inf)"
      :alt="e['fromAccount']['name']"
    />
    <h3>{{ e['fromAccount']['name'] }}</h3>
    <BlahajButton color="var(--background)" hover="var(--surface1)">
      <p>{{ e['amount']['value'] }} €</p>
    </BlahajButton>
    <p></p>
  </VerticalCard>
  <VerticalCard v-if="donationsList.length === 0" color="var(--missing)">
    <h3>The list is empty...<br />Help us resolve that!</h3>
    <p>You can donate through OpenCollective!</p>
    <BlahajButton
      @click="changeLoc(links.donate)"
      color="var(--background)"
      hover="var(--surface1)"
    >
      <p>Donate</p>
    </BlahajButton>
  </VerticalCard>
  <VerticalCard color="#C8E7FF" v-else>
    <h3>And more !</h3>
    <p>Go to <b>OpenCollective</b> to see all the donations made so far.</p>
    <BlahajButton
      @click="changeLoc(links.donate)"
      color="var(--background)"
      hover="var(--surface1)"
    >
      <p>Donate</p>
    </BlahajButton>
  </VerticalCard>
  <VerticalCard color="#ECBCFD">
    <h3>You're a Ko-Fi donator ?</h3>
    <p>If you made a donation through Ko-Fi, go here.</p>
    <BlahajButton @click="$router.push('/kofi')" color="var(--background)" hover="var(--surface1)">
      <p>Ko-Fi donations</p>
    </BlahajButton>
  </VerticalCard>
</template>
