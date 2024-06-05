<script setup lang="ts">
import BlockCard from '@/components/cards/BlockCard.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import SlideableContainer from '@/components/containers/SlideableContainer.vue'
import ContentContainer from '@/components/frames/ContentFrame.vue'
import RandomTitle from '@/fetchables/RandomTitle.vue'
import AppsList from '@/fetchables/AppsList.vue'
import UsersList from '@/fetchables/UsersList.vue'
import LoadingState from '@/components/LoadingState.vue'
import PageFrame from '@/components/frames/PageFrame.vue'
import DonatorsList from '@/fetchables/DonatorsList.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import ThingsContainer from '@/components/containers/ThingsContainer.vue'

import { assets } from 'blahaj-library'
import BulletpointContainer from '@/components/containers/BulletpointContainer.vue'
import CustomGap from '@/components/CustomGap.vue'
import WelcomeBundle from '@/bundles/WelcomeBundle.vue'
import BulletpointsBundle1 from '@/bundles/BulletpointsBundle1.vue'
import BulletpointsBundle2 from '@/bundles/BulletpointsBundle2.vue'
import TiersBundle from '@/bundles/TiersBundle.vue'
import ContactsBundle from '@/bundles/ContactsBundle.vue'
</script>

<template>
  <PageFrame>
    <SpinningBlahaj></SpinningBlahaj>
    <ContentContainer>
      <template #title>
        <Suspense>
          <RandomTitle></RandomTitle>
          <template #fallback><h1>:3</h1></template>
        </Suspense>
        <p>Welcome to <b>Blahaj Land</b>! Hope you enjoy your stay.</p>
      </template>
      <GridContainer :rows="4">
        <WelcomeBundle />
      </GridContainer>
    </ContentContainer>
    <CustomGap gap="32px"></CustomGap>
    <ContentContainer>
      <template #title
        ><h2 id="p1">Why?</h2>
        <p>Why should you consider <b>Blahaj Land</b> for your needs ? ;3</p></template
      >
      <BulletpointContainer color="#d3ddff">
        <template #image
          ><img :src="assets.images.pictures.get('screenshot1')" alt="Screenshot 1"
        /></template>
        <BulletpointsBundle1 />
      </BulletpointContainer>
      <CustomGap class="displayOnDesktop" gap="48px"></CustomGap>
      <CustomGap class="displayOnMobile" gap="0px"></CustomGap>
      <BulletpointContainer is-inverted color="#f3d8ff">
        <template #image
          ><img :src="assets.images.pictures.get('screenshot2')" alt="Screenshot 2"
        /></template>
        <BulletpointsBundle2 />
      </BulletpointContainer>
    </ContentContainer>
    <ContentContainer>
      <template #title
        ><h2 id="p2">Services</h2>
        <p>The stuff we host >:3</p></template
      >
      <Suspense>
        <template #fallback>
          <LoadingState></LoadingState>
        </template>
        <SlideableContainer>
          <AppsList></AppsList>
        </SlideableContainer>
      </Suspense>
    </ContentContainer>
    <ContentContainer>
      <template #title
        ><h2 id="p3">Tiers</h2>
        <p>Get more features and support the website >83</p></template
      >
      <GridContainer>
        <TiersBundle />
      </GridContainer>
    </ContentContainer>
    <ContentContainer>
      <template #title
        ><h2 id="p4">User sites</h2>
        <p>Here you can view our user's sites :3</p></template
      >
      <Suspense>
        <template #fallback>
          <LoadingState></LoadingState>
        </template>
        <SlideableContainer>
          <UsersList></UsersList>
        </SlideableContainer>
      </Suspense>
    </ContentContainer>
    <ContentContainer>
      <template #title
        ><h2 id="p5">Donations</h2>
        <p>Thanks for your <i>kind</i> donations &lt;3</p></template
      >
      <Suspense>
        <template #fallback>
          <LoadingState></LoadingState>
        </template>
        <SlideableContainer>
          <DonatorsList></DonatorsList>
        </SlideableContainer>
      </Suspense>
    </ContentContainer>
    <ContentContainer last>
      <template #title><h3>Let's keep in touch</h3></template>
      <ThingsContainer>
        <ContactsBundle />
      </ThingsContainer>
    </ContentContainer>
  </PageFrame>
</template>
