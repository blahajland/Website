<script lang="ts" setup>
import { assets } from "blahaj-library";
import links from "@/assets/data/links.json";
import GridContainer from "@/components/containers/GridContainer.vue";
import BlahajButton from "@/components/buttons/BlahajButton.vue";
import BlockCard from "@/components/cards/BlockCard.vue";
import sanitizeHtml from "sanitize-html";

interface Tier {
  color: string;
  title: string;
  price: string;
  bulletpoints: string[];
  isFree: boolean;
}

interface TiersList {
  tiers: Array<Tier>;
}

const fetchData = async () => {
  const fetchedData = await assets.json.get("tiers");
  if (!("tiers" in fetchedData)) return Promise.reject();
  const convertedData = fetchedData as TiersList;
  convertedData.tiers.forEach((e) =>
    e.bulletpoints.forEach((e, i, l) => {
      let cleaned = sanitizeHtml(e);
      l[i] = `&bull; ${cleaned}`;
    }),
  );
  return convertedData.tiers;
};

const tiersList = (await useAsyncData("fetchTiers", fetchData)).data;

const createBulletpoints = (bulletPoints: Array<string>) =>
  bulletPoints.join(" <br /> ");
</script>

<template>
  <GridContainer
    :rows="(tiersList?.length || 0) === 0 ? 3 : tiersList?.length || 0"
  >
    <BlockCard v-if="(tiersList?.length || 0) === 0" color="var(--missing)">
      <h3>The list is empty... It shouldn't</h3>
      <p>
        If this section appears empty after reloading, please contact the dev
        team.
      </p>
    </BlockCard>
    <BlockCard v-for="(e, i) in tiersList" :key="i" :color="e.color">
      <h2>{{ e.title }}</h2>
      <h3>{{ e.price }}</h3>
      <p v-html="createBulletpoints(e.bulletpoints)" />
      <BlahajButton
        v-if="e.isFree"
        :href="links.portals.signup"
        background="var(--background)"
        hover="var(--surface1)"
      >
        <img :src="assets.images.icons.get('signup')" alt="Sign up" />
        <p>Join</p>
      </BlahajButton>
      <BlahajButton
        v-else
        :href="links.portals.donate"
        background="var(--background)"
        hover="var(--surface1)"
      >
        <img :src="assets.images.icons.get('donate')" alt="Donate" />
        <p>Donate</p>
      </BlahajButton>
    </BlockCard>
  </GridContainer>
</template>
