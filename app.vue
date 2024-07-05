<script lang="ts" setup>
import { getAsset, themeService } from "blahaj-library";

// Bundles
import NavbarBundle from "@/bundles/NavbarBundle.vue";
import FooterBundle from "@/bundles/FooterBundle.vue";
import BulletpointsBundle1 from "@/bundles/BulletpointsBundle1.vue";
import BulletpointsBundle2 from "@/bundles/BulletpointsBundle2.vue";
import WelcomeBundle from "@/bundles/WelcomeBundle.vue";

// SSR
import RandomTitle from "@/bundles/serverside/RandomTitle.vue";
import AppsList from "@/bundles/serverside/AppsList.vue";
import TiersList from "@/bundles/serverside/TiersList.vue";
import UsersList from "@/bundles/serverside/UsersList.vue";
import DonatorsList from "@/bundles/serverside/DonatorsList.vue";

// Containers
import ContentContainer from "@/components/frames/ContentFrame.vue";
import PageFrame from "@/components/frames/PageFrame.vue";
import GridContainer from "@/components/containers/GridContainer.vue";
import BulletpointContainer from "@/components/containers/BulletpointContainer.vue";

// Components
import SpinningBlahaj from "@/components/SpinningBlahaj.vue";
import CustomGap from "@/components/CustomGap.vue";

useNuxtApp().hook("app:mounted", () => themeService.setThemeFromCookie());
</script>

<template>
  <NavbarBundle />
  <PageFrame>
    <SpinningBlahaj />
    <ContentContainer>
      <template #title>
        <RandomTitle />
        <p>Welcome to <b>Blahaj Land</b>! Hope you enjoy your stay.</p>
      </template>
      <GridContainer :rows="4">
        <WelcomeBundle />
      </GridContainer>
    </ContentContainer>
    <CustomGap gap="32px" />
    <ContentContainer>
      <template #title>
        <h2 id="p1">Why?</h2>
        <p>Why should you consider <b>Blahaj Land</b> for your needs? ;3</p>
      </template>
      <BulletpointContainer color="#d3ddff">
        <template #image>
          <NuxtImg
            :src="getAsset('pictures/screenshot1.png')"
            alt="Screenshot 1"
          />
        </template>
        <BulletpointsBundle1 />
      </BulletpointContainer>
      <CustomGap class="displayOnDesktop" gap="48px" />
      <CustomGap class="displayOnMobile" gap="0px" />
      <BulletpointContainer color="#f3d8ff" is-inverted>
        <template #image>
          <NuxtImg
            :src="getAsset('pictures/screenshot2.png')"
            alt="Screenshot 2"
          />
        </template>
        <BulletpointsBundle2 />
      </BulletpointContainer>
    </ContentContainer>
    <ContentContainer>
      <template #title>
        <h2 id="p2">Services</h2>
        <p>The stuff we host >:3</p>
      </template>
      <AppsList />
    </ContentContainer>
    <ContentContainer>
      <template #title>
        <h2 id="p3">Tiers</h2>
        <p>Get more features and support the website >83</p>
      </template>
      <TiersList />
    </ContentContainer>
    <ContentContainer>
      <template #title>
        <h2 id="p4">User sites</h2>
        <p>Here you can view our user's sites :3</p>
      </template>
      <UsersList />
    </ContentContainer>
    <ContentContainer last>
      <template #title>
        <h2 id="p5">Donations</h2>
        <p>Thanks for your <i>kind</i> donations &lt;3</p>
      </template>
      <DonatorsList />
    </ContentContainer>
  </PageFrame>
  <FooterBundle />
</template>
