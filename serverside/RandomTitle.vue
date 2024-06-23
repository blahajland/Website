<script lang="ts" setup>
import { getAsset } from "blahaj-library";
import { fetchJson } from "assets/code/fetch-tools";

interface RandomTitles {
  randomTitles: Array<string>;
}

const fetchData = async () => {
  const fetchedData = await fetchJson(getAsset("json/titles.json"));
  if ("randomTitles" in fetchedData) {
    const randomTitles = (fetchedData as RandomTitles).randomTitles;
    return randomTitles[Math.floor(Math.random() * randomTitles.length)];
  }
};

const randomTitle = (await useAsyncData("fetchRandomTitle", fetchData)).data;
</script>

<template>
  <h1>{{ randomTitle }}</h1>
</template>
