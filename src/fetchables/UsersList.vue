<script setup>
import { changeLoc } from '@/library/js/linkTools.js'
import SmallCard from '@/components/cards/SmallCard.vue'
import { fetchDataAsJson } from '@/library/js/fetchTools.js'
import fetchable from '@/assets/json/fetchable.json'
import { ref } from 'vue'
import VerticalCard from '@/components/cards/VerticalCard.vue'
import links from '@/assets/json/links.json'
import BlahajButton from '@/library/vue/BlahajButton.vue'

const usersList = ref([])
usersList.value = (await fetchDataAsJson(fetchable.users))['users']
</script>

<template>
  <VerticalCard color="var(--missing)" v-if="usersList.length === 0">
    <h3>The list is empty...<br />Help us resolve that!</h3>
    <p>If you want your own website, sign up !</p>
    <BlahajButton
      @click="changeLoc(links.signup)"
      color="var(--background)"
      hover="var(--surface1)"
    >
      <img alt="Sign up" src="https://blahaj.land/static/images/icons/signup.png" />
      <p>Sign Up</p>
    </BlahajButton>
  </VerticalCard>
  <SmallCard
    v-for="(e, i) in usersList"
    :key="i"
    :clickable="true"
    :color="e.color"
    @click="changeLoc(e.href)"
  >
    <img :alt="e.title" :src="e.img" />
    <h3>{{ e.title }}</h3>
  </SmallCard>
</template>
