<script lang="ts" setup>
import UserCard from "@/components/cards/UserCard.vue";
import BlahajButton from "@/components/buttons/BlahajButton.vue";
import BlockCard from "@/components/cards/BlockCard.vue";
import links from "@/assets/data/links.json";
import { assets } from "blahaj-library";
import CarouselContainer from "@/components/containers/CarouselContainer.vue";

interface User {
  color: string;
  img: string;
  title: string;
  href: string;
}

interface UsersList {
  users: Array<User>;
}

const fetchData = async () => {
  const data = await assets.json.get("users");
  if (!("users" in data)) return Promise.reject();
  return (data as UsersList).users;
};

const usersList = (await useAsyncData("fetchUsersList", fetchData)).data;
</script>

<template>
  <CarouselContainer>
    <BlockCard v-if="(usersList?.length || 0) === 0" color="var(--missing)">
      <h3>
        The list is empty... <br />
        Help us resolve that!
      </h3>
      <p>If you want to host your own website, sign up!</p>
      <BlahajButton
        :href="links.portals.signup"
        background="var(--background)"
        hover="var(--surface1)"
      >
        <img
          alt="Sign up"
          src="https://blahaj.land/static/images/icons/signup.png"
        />
        <p>Sign Up</p>
      </BlahajButton>
    </BlockCard>
    <UserCard
      v-for="(e, i) in usersList"
      :key="i"
      :color="e.color"
      :href="e.href"
      :image="e.img"
      :title="e.title"
      :website="e.href"
    />
  </CarouselContainer>
</template>
