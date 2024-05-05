<script setup>
import VerticalCard from '@/components/cards/VerticalCard.vue'
import BlahajButton from '@/library/vue/BlahajButton.vue'
import CustomGap from '@/library/vue/CustomGap.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import SlideableContainer from '@/components/containers/SlideableContainer.vue'
import PageContainer from '@/components/containers/PageContainer.vue'
import SpinningBlahaj from '@/library/vue/SpinningBlahaj.vue'
import RandomTitle from '@/fetchables/RandomTitle.vue'
import AppsList from '@/fetchables/AppsList.vue'
import UsersList from '@/fetchables/UsersList.vue'
import DonatorsList from '@/fetchables/DonatorsList.vue'

import links from '@/assets/json/links.json'

import { changeLoc } from '@/library/js/linkTools.js'
</script>

<template>
  <div class="ViewRules">
    <SpinningBlahaj />
    <PageContainer>
      <template #title>
        <RandomTitle />
        <p>Welcome to <b>Blahaj Land</b>! Hope you enjoy your stay.</p>
      </template>
      <GridContainer rows="4">
        <VerticalCard color="#ACD3DC">
          <p>Take a tour and see <b>what's inside :3</b></p>
          <BlahajButton @click="changeLoc('#p1', false)">
            <p>Discover</p>
          </BlahajButton>
        </VerticalCard>
        <VerticalCard color="#F0C1B7">
          <p>Create your account and <b>pass the vibe check &gt;:3</b></p>
          <BlahajButton>
            <p>Sign up</p>
          </BlahajButton>
        </VerticalCard>
        <VerticalCard color="#B1BCE1">
          <p>Just want to hang around? Join our <b>Discord</b></p>
          <BlahajButton @click="changeLoc(links.join)">
            <p>Join</p>
          </BlahajButton>
        </VerticalCard>
        <VerticalCard color="#DCDCDC">
          <p>Already part of the community? Get access to <b>all the apps</b></p>
          <BlahajButton @click="changeLoc(links.open)">
            <p>Open Dashboard</p>
          </BlahajButton>
        </VerticalCard>
      </GridContainer>
    </PageContainer>
    <CustomGap gap="32px" />
    <PageContainer>
      <template #title>
        <h2 id="p1">Why?</h2>
        <p>Why should you consider <b>Blahaj Land</b> for your needs ? ;3</p>
      </template>
      <GridContainer>
        <VerticalCard color="#B1BCE1">
          <img alt="Website" src="/icons/website.png" />
          <h3>Host your own website for free!</h3>
          <p>With <b>blahaj.land</b> you can easily host your own static site for free!</p>
        </VerticalCard>
        <VerticalCard color="#ACD3DC">
          <img alt="Cloud" src="/icons/cloud.png" />
          <h3>Cloud storage</h3>
          <p>Starting at <b>1€&sol;month</b></p>
        </VerticalCard>
        <VerticalCard color="#C8E7FF">
          <img alt="Communication" src="/icons/communication.png" />
          <h3>Communication services</h3>
          <p>E-mail, Fediverse, Send and <b>more</b>!</p>
        </VerticalCard>
        <VerticalCard color="#DEAAFF" gap="8px">
          <img alt="Communication" src="/icons/friend.png" />
          <h3>Bring your friends in!</h3>
          <p>
            For every person you invite, you'll get <b>5GB</b> of storage. If they make a donation,
            you'll get an extra <b>10GB</b>.
          </p>
        </VerticalCard>
        <VerticalCard color="#ECBCFD" gap="8px">
          <img alt="Communication" src="/icons/switch.png" />
          <h3>You want to host your website?</h3>
          <p>
            If you switch from <b>neocities.org</b>, <b>Github Pages</b>, or any other host, you'll
            get <b>15GB</b> of storage and a month of <b>Premium</b> for free.
          </p>
        </VerticalCard>
        <VerticalCard color="#FFCBF2">
          <img alt="Communication" src="/icons/rosa.png" />
          <h3>Queer-powered</h3>
          <p>Everybody is welcome here. You always will be.</p>
        </VerticalCard>
      </GridContainer>
    </PageContainer>
    <PageContainer>
      <template #title>
        <h2 id="p2">Services</h2>
        <p>The stuff we host >:3</p>
      </template>
      <SlideableContainer>
        <AppsList />
      </SlideableContainer>
    </PageContainer>
    <PageContainer>
      <template #title>
        <h2 id="p3">User sites</h2>
        <p>Here you can view our user's sites :3</p>
      </template>
      <SlideableContainer>
        <UsersList />
      </SlideableContainer>
    </PageContainer>
    <PageContainer>
      <template #title>
        <h2 id="p4">Tiers</h2>
        <p>Get more features and support the website >83</p>
      </template>
      <GridContainer>
        <VerticalCard color="#BCDBFF">
          <h2>Starter</h2>
          <h3>Free</h3>
          <p>
            &bull; Send, Vaultwarden, Haste <b>&amp; more </b><br />&bull; Email (500MB quota)
            <br />&bull; One
            <b>hosted site</b>
          </p>
          <BlahajButton @click="changeLoc(links.join)">
            <p>Join</p>
          </BlahajButton>
        </VerticalCard>
        <VerticalCard color="#FFCEF1">
          <h2>Supporter</h2>
          <h3>Starting at 1€/month</h3>
          <p>
            &bull; <b>10GB</b> of Nextcloud storage <br />&bull; <b>Unlimited</b> site hosting
            <br />&bull; All the advantages of the <b>Starter</b> tier
          </p>
          <BlahajButton @click="changeLoc(links.donate)">
            <p>Donate</p>
          </BlahajButton>
        </VerticalCard>
        <VerticalCard color="#FFE5A3">
          <h2>Premium</h2>
          <h3>Starting at 5€/month</h3>
          <p>
            &bull; <b>250GB</b> of Nextcloud storage <br />&bull; <b>Discord bot</b> hosting
            <br />&bull; All the advantages of the <b>Supporter</b> tier
          </p>
          <BlahajButton @click="changeLoc(links.donate)">
            <p>Donate</p>
          </BlahajButton>
        </VerticalCard>
      </GridContainer>
    </PageContainer>
    <PageContainer :last="true">
      <template #title>
        <h2 id="p5">Donations</h2>
        <p>Thanks for your <i>kind</i> donations &lt;3</p>
      </template>
      <SlideableContainer>
        <DonatorsList />
      </SlideableContainer>
    </PageContainer>
  </div>
</template>
