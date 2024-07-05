<script lang="ts" setup>
import AppCard from "@/components/cards/AppCard.vue";
import ExpandableContainer from "@/components/containers/ExpandableContainer.vue";
import { getAsset } from "blahaj-library";

const appList = (await useFetch("/api/assets?file=apps")).data;
</script>

<template>
  <ExpandableContainer>
    <AppCard v-for="(e, i) in appList" :key="i" :color="e.color">
      <template #image>
        <NuxtImg :alt="e.title" :src="e.img" />
      </template>
      <h3>{{ e.title }}</h3>
      <p v-html="e.desc" />
    </AppCard>
    <AppCard v-if="(appList?.length || 0) === 0" color="var(--missing)">
      <template #image>
        <NuxtImg :src="getAsset('apps/unknown.png')" alt="Unknown" />
      </template>
      <h3>The list is empty... It shouldn't</h3>
      <p>
        If this section appears empty after reloading, please contact the dev
        team.
      </p>
    </AppCard>
    <AppCard v-else color="#F3CBFF">
      <template #image>
        <NuxtImg :src="getAsset('apps/more.png')" alt="More" />
      </template>
      <h3>And much...</h3>
      <p>...much much more!</p>
    </AppCard>
  </ExpandableContainer>
</template>
