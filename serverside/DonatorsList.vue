<script lang="ts" setup>
import { assets } from "blahaj-library";
import BlockCard from "@/components/cards/BlockCard.vue";
import links from "@/assets/data/links.json";
import DonatorCard from "@/components/cards/DonatorCard.vue";
import BlahajButton from "@/components/buttons/BlahajButton.vue";
import CarouselContainer from "@/components/containers/CarouselContainer.vue";
import {
  ADMIN_NB,
  API_LINK,
  COLLECTIVE_QUERY,
  type CollectiveInfo,
  DONATIONS_QUERY,
  type DonatorsInfo,
  type DonatorsList,
  fetchDataFromGql,
  MAX_DONATORS,
} from "@/assets/code/donators-tools";

const fetchDonators = async (): Promise<DonatorsList> => {
  const data = await fetchDataFromGql(API_LINK, DONATIONS_QUERY, {});
  if (!("data" in data) || !data.data.collective) return Promise.reject();
  const members = data.data.collective.members as DonatorsList;
  return {
    totalCount: members.totalCount - ADMIN_NB,
    nodes: members.nodes.filter((e: DonatorsInfo) => e.tier),
  };
};

const fetchCollective = async (): Promise<CollectiveInfo> => {
  const data = await fetchDataFromGql(API_LINK, COLLECTIVE_QUERY, {});
  if (!("data" in data) || !data.data.collective) return Promise.reject();
  return data.data.collective as CollectiveInfo;
};

const donationsList = (await useAsyncData("fetchDonatorsList", fetchDonators))
  .data;
const collectiveInfo = (
  await useAsyncData("fetchCollectiveInfo", fetchCollective)
).data;

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<template>
  <CarouselContainer>
    <BlockCard v-if="donationsList?.nodes.length === 0" color="var(--missing)">
      <h3>The list is empty... <br />Help us resolve that!</h3>
      <p>You can donate through OpenCollective!</p>
      <BlahajButton
        :href="links.portals.donate"
        background="var(--background)"
        hover="var(--surface1)"
      >
        <img :src="assets.images.icons.get('donate')" alt="Donate" />
        <p>Donate</p>
      </BlahajButton>
    </BlockCard>
    <DonatorCard
      v-else
      :donation-amount="collectiveInfo?.stats.balance.value || 0"
      :donation-currency="collectiveInfo?.stats.balance.currency"
      :donation-tier="`${donationsList?.totalCount} donators`"
      :donator-image="collectiveInfo?.imageUrl || ''"
      :donator-name="collectiveInfo?.name || ''"
      color="#BDE0FF"
    />
    <DonatorCard
      v-for="(e, i) in donationsList?.nodes"
      :key="i"
      :donation-amount="e.totalDonations.value"
      :donation-currency="e.totalDonations.currency"
      :donation-tier="capitalize(e.tier.name)"
      :donator-image="e.account.imageUrl"
      :donator-name="e.account.name"
    />
    <BlockCard
      v-if="(donationsList?.totalCount || 0) >= MAX_DONATORS"
      color="#C8E7FF"
    >
      <h3>And more!</h3>
      <p>
        Go to <b>OpenCollective</b> to see all the donations that keep us going!
      </p>
      <BlahajButton
        :href="links.portals.donate"
        background="var(--background)"
        hover="var(--surface1)"
      >
        <img :src="assets.images.icons.get('donate')" alt="Donate" />
        <p>Donate</p>
      </BlahajButton>
    </BlockCard>
    <BlockCard color="#ECBCFD">
      <h3>Are you a Ko-Fi donator?</h3>
      <p>Ko-Fi donations are displayed here.</p>
      <BlahajButton
        :href="links.documentation.kofi"
        background="var(--background)"
        hover="var(--surface1)"
      >
        <img :src="assets.images.icons.get('kofi')" alt="KoFi" />
        <p>Ko-Fi donations</p>
      </BlahajButton>
    </BlockCard>
  </CarouselContainer>
</template>
