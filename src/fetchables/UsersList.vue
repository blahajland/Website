<script setup>
import { changeLoc } from '@/assets/js/linkTools.js'
import SmallCard from '@/components/cards/SmallCard.vue'
import { fetchDataAsJson } from '@/assets/js/fetchTools.js'
import links from '@/assets/json/links.json'
import { onBeforeMount, ref } from 'vue'

const usersList = ref([])

onBeforeMount(async () => {
  usersList.value = await fetchDataAsJson(links.users, 'users')
})
</script>

<template>
  <SmallCard
    v-for="(e, i) in usersList"
    :key="i"
    :color="e.color"
    @click="changeLoc(e.href)"
    :clickable="true"
  >
    <img :src="e.img" :alt="e.title" />
    <h3>{{ e.title }}</h3>
  </SmallCard>
</template>
