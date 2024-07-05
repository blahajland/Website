<script lang="ts" setup>
const randomTitles = (
  await useAsyncData("random", async () => {
    let data = await $fetch("/api/assets?file=titles");
    return data[Math.floor(Math.random() * data.length)];
  })
).data.value;
</script>

<template>
  <h1>{{ randomTitles }}</h1>
</template>
