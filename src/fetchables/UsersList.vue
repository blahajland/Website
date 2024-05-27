<script setup lang="ts">
import { changeLoc } from '@/library/ts/common-tools'
import UserCard from '@/components/cards/UserCard.vue'
import { fetchDataAsJson } from '@/library/ts/fetch-tools'
import fetchable from '@/assets/json/fetchable.json'
import { type Ref, ref } from 'vue'
import BlockCard from '@/components/cards/BlockCard.vue'
import links from '@/assets/json/links.json'
import BlahajButton from '@/library/vue/BlahajButton.vue'

interface User {
  color: string
  img: string
  title: string
  href: string
}

interface UsersList {
  users: Array<User>
}

const usersList: Ref<Array<User>> = ref([])

let fetchedData = await fetchDataAsJson(fetchable.users)
if ('users' in fetchedData) usersList.value = (fetchedData as UsersList).users
</script>

<template>
  <BlockCard color="var(--missing)" v-if="usersList.length === 0">
    <h3>The list is empty...<br />Help us resolve that!</h3>
    <p>If you want your own website, sign up !</p>
    <BlahajButton
      @click="changeLoc(links.signup)"
      background="var(--background)"
      hover="var(--surface1)"
    >
      <img alt="Sign up" src="https://blahaj.land/static/images/icons/signup.png" />
      <p>Sign Up</p>
    </BlahajButton>
  </BlockCard>
  <UserCard
    v-for="(e, i) in usersList"
    :key="i"
    clickable
    :color="e.color"
    @click="changeLoc(e.href)"
  >
    <img :alt="e.title" :src="e.img" />
    <h3>{{ e.title }}</h3>
  </UserCard>
</template>
