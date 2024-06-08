<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { assets, changeLoc } from 'blahaj-library'
import BlockCard from '@/components/cards/BlockCard.vue'
import links from '@/assets/json/links.json'
import DonatorCard from '@/components/cards/DonatorCard.vue'
import axios from 'axios'
import BlahajButton from '@/components/buttons/BlahajButton.vue'

const apiLink = 'https://api.opencollective.com/graphql/v2'
const projectSlug = 'blahajland'
const maxNbOfDonators = 8
const donationsQuery = `
query Transactions {
    collective(slug: "${projectSlug}") {
        members(limit: ${maxNbOfDonators + 3}) {
            nodes {
                tier {
                    name
                }
                account {
                    name
                    imageUrl
                }
                totalDonations {
                    value
                    currency
                }
            }
            totalCount
        }
        stats {
            balance {
                value
                currency
            }
        }
        imageUrl
        name
    }
}
`

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

interface OCDonators {
  tier: {
    name: string
  }
  account: {
    name: string
    imageUrl: string
  }
  totalDonations: {
    value: number
    currency: string
  }
}

interface CollectiveMoney {
  balance: {
    value: number
    currency: string
  }
}

interface CollectiveInfo {
  data: {
    collective: {
      members: {
        nodes: Array<OCDonators>
        totalCount: number
      }
      stats: CollectiveMoney
      imageUrl: string
      name: string
    }
  }
}

interface DisplayedCollectiveInfo {
  imageUrl: string
  money: number
  currency?: string
  nbOfDonators: number
  name: string
}

const donationsList: Ref<Array<OCDonators>> = ref([])
const collectiveInfo: Ref<DisplayedCollectiveInfo> = ref({} as DisplayedCollectiveInfo)

let data = await fetchDataFromGql(apiLink, donationsQuery, {})
let nbOfAdmins = 0
if ('data' in data && (data as CollectiveInfo).data.collective) {
  let collective = (data as CollectiveInfo).data.collective
  donationsList.value = collective.members.nodes.filter((e: OCDonators) => {
    if (!e.tier) nbOfAdmins += 1
    return e.tier
  })
  collectiveInfo.value = {
    imageUrl: collective.imageUrl,
    money: collective.stats.balance.value,
    currency: collective.stats.balance.currency,
    nbOfDonators: collective.members.totalCount - nbOfAdmins,
    name: collective.name
  }
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const isDonationsEmpty = () => donationsList.value.length === 0
</script>

<template>
  <BlockCard v-if="isDonationsEmpty()" color="var(--missing)">
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
  <DonatorCard
    v-else
    :donator-image="collectiveInfo.imageUrl"
    :donation-amount="collectiveInfo.money"
    :donator-name="collectiveInfo.name"
    :donation-currency="collectiveInfo.currency"
    :donation-tier="`${collectiveInfo.nbOfDonators} donators`"
    color="#BDE0FF"
  />
  <DonatorCard
    v-for="(e, i) in donationsList"
    :key="i"
    :donation-currency="e.totalDonations.currency"
    :donation-amount="e.totalDonations.value"
    :donation-tier="capitalize(e.tier.name)"
    :donator-image="e.account.imageUrl"
    :donator-name="e.account.name"
  />
  <BlockCard v-if="collectiveInfo.nbOfDonators >= maxNbOfDonators" color="#C8E7FF">
    <h3>And more!</h3>
    <p>Go to <b>OpenCollective</b> to see all the donations that keep us going! </p>
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
    <h3>Are you a Ko-Fi donator?</h3>
    <p>Ko-Fi donations are displayed here.</p>
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
