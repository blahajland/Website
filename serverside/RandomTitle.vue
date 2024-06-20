<script lang="ts" setup>
import { assets } from "blahaj-library";

interface RandomTitles {
  randomTitles: Array<string>;
}

const fetchData = async () => {
  const fetchedData = await assets.json.get("titles");
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
