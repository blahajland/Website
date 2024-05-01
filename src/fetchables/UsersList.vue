<script setup>
import { changeLoc } from '@/library/js/linkTools.js'
import SmallCard from '@/components/cards/SmallCard.vue'
import { fetchDataAsJson } from '@/library/js/fetchTools.js'
import fetchable from '@/assets/json/fetchable.json'
import { onBeforeMount, ref } from 'vue'

const usersList = ref([])

onBeforeMount(async () => {
  usersList.value = await fetchDataAsJson(fetchable.users, 'users')
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
