<script lang="ts" setup>
import AppCard from "@/components/cards/AppCard.vue";
import { assets } from "blahaj-library";
import ExpandableContainer from "@/components/containers/ExpandableContainer.vue";
import sanitizeHtml from "sanitize-html";

interface AppDescriptor {
  color: string;
  img: string;
  title: string;
  desc: string;
  noDisplay?: boolean;
  yuno?: string;
}

interface AppsList {
  apps: Array<AppDescriptor>;
}

const fetchData = async () => {
  const fetchedData = await assets.json.get("apps");
  if (!("apps" in fetchedData)) return Promise.reject();
  let apps = (fetchedData as AppsList).apps.filter(
    (elem: AppDescriptor) => !("noDisplay" in elem && elem["noDisplay"]),
  );
  apps.forEach((e) => {
    e.desc = sanitizeHtml(e.desc);
  });
  return apps;
};

const appList = (await useAsyncData("fetchAppsList", fetchData)).data;
</script>

<template>
  <ExpandableContainer>
    <AppCard v-for="(e, i) in appList" :key="i" :color="e.color">
      <template #image>
        <img :alt="e.title" :src="e.img" />
      </template>
      <h3>{{ e.title }}</h3>
      <p v-html="e.desc" />
    </AppCard>
    <AppCard v-if="(appList?.length || 0) === 0" color="var(--missing)">
      <template #image>
        <img :src="assets.images.apps.get('unknown')" alt="Unknown" />
      </template>
      <h3>The list is empty... It shouldn't</h3>
      <p>
        If this section appears empty after reloading, please contact the dev
        team.
      </p>
    </AppCard>
    <AppCard v-else color="#F3CBFF">
      <template #image>
        <img :src="assets.images.apps.get('more')" alt="More" />
      </template>
      <h3>And much...</h3>
      <p>...much much more!</p>
    </AppCard>
  </ExpandableContainer>
</template>
