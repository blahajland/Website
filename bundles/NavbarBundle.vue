<script lang="ts" setup>
import { getAsset, themeService } from "blahaj-library";
import links from "@/assets/data/links";
import BlahajButton from "@/components/buttons/BlahajButton.vue";
import NavbarFrame from "@/components/frames/NavbarFrame.vue";
import TopBar from "@/components/containers/TopBar.vue";
import TabGroup from "@/components/containers/TabGroup.vue";
import TabButton from "@/components/buttons/TabButton.vue";
</script>

<template>
  <NavbarFrame>
    <TopBar>
      <BlahajButton :href="links.portals.donate">
        <NuxtImg :src="getAsset('/icons/donate.svg')" alt="Donate" />
        <p class="displayOnDesktop">Donate</p>
      </BlahajButton>
      <BlahajButton :href="links.portals.signup">
        <NuxtImg :src="getAsset('/icons/signup.svg')" alt="Donate" />
        <p class="displayOnDesktop">Sign up</p>
      </BlahajButton>
      <BlahajButton :href="links.portals.login">
        <NuxtImg :src="getAsset('/icons/login.svg')" alt="Donate" />
        <p class="displayOnDesktop">Log in</p>
      </BlahajButton>
      <BlahajButton @click="themeService.switchTheme()">
        <NuxtImg :src="getAsset('/icons/theme.svg')" alt="Donate" />
        <p class="displayOnDesktop">Theme</p>
      </BlahajButton>
    </TopBar>
    <TabGroup>
      <TabButton href="#p1">
        <p>Why?</p>
      </TabButton>
      <TabButton href="#p2">
        <p>Services</p>
      </TabButton>
      <TabButton href="#p3">
        <p>Tiers</p>
      </TabButton>
      <TabButton href="#p4">
        <p>User Sites</p>
      </TabButton>
      <TabButton href="#p5">
        <p>Donations</p>
      </TabButton>
    </TabGroup>
  </NavbarFrame>
</template>
