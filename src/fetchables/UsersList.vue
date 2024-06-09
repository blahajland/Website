<script setup lang="ts">
import UserCard from '@/components/cards/UserCard.vue'
import BlahajButton from '@/components/buttons/BlahajButton.vue'

import { type Ref, ref } from 'vue'
import BlockCard from '@/components/cards/BlockCard.vue'
import links from '@/assets/json/links.json'
import { assets, changeLoc } from 'blahaj-library'

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

let fetchedData = await assets.json.get('users')
if ('users' in fetchedData) usersList.value = (fetchedData as UsersList).users
</script>

<template>
  <BlockCard v-if="usersList.length === 0" color="var(--missing)">
    <h3>
      The list is empty... <br />
      Help us resolve that!
    </h3>
    <p>If you want to host your own website, sign up!</p>
    <BlahajButton
      background="var(--background)"
      hover="var(--surface1)"
      @click="changeLoc(links.signup)"
    >
      <img alt="Sign up" src="https://blahaj.land/static/images/icons/signup.png" />
      <p>Sign Up</p>
    </BlahajButton>
  </BlockCard>
  <UserCard
    v-for="(e, i) in usersList"
    :key="i"
    clickable
    :image="e.img"
    :title="e.title"
    :website="e.href"
    :color="e.color"
    @click="changeLoc(e.href)"
  />
</template>
