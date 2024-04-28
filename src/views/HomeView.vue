<script setup>
import ContentBlock from '@/components/cards/VerticalCard.vue'
import CustomButton from '@/components/CustomButton.vue'
import CustomGap from '@/components/CustomGap.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import SlideableContainer from '@/components/containers/SlideableContainer.vue'
import SideBlock from '@/components/cards/RowCard.vue'
import { changeLoc } from '@/assets/js/linkTools.js'
import PageContainer from '@/components/containers/PageContainer.vue'
import SmallBlock from '@/components/cards/SmallCard.vue'
import TabButton from '@/components/TabButton.vue'
import TabGroup from '@/components/containers/TabGroup.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import links from '@/assets/json/links.json'
import { onBeforeMount, ref } from 'vue'
import { fetchDataAsJson } from '@/assets/js/fetchTools.js'

const appList = ref([])
const usersList = ref([])
const donationsList = ref([])
const randomTitle = ref('')

onBeforeMount(async () => {
  appList.value = await fetchDataAsJson(links.apps)
  usersList.value = await fetchDataAsJson(links.users)
  donationsList.value = await fetchDataAsJson(links.donations)
  const randomTitles = await fetchDataAsJson(links.titles)
  randomTitle.value =
    randomTitles
      ['randomTitles']
      [Math.floor(Math.random() * randomTitles['randomTitles'].length)]
})
</script>

<template>
  <div class="ViewRules">
    <TabGroup>
      <TabButton @click="changeLoc('#p1', false)">
        <p>Why?</p>
      </TabButton>
      <TabButton @click="changeLoc('#p2', false)">
        <p>Services</p>
      </TabButton>
      <TabButton @click="changeLoc('#p3', false)">
        <p>User Sites</p>
      </TabButton>
      <TabButton @click="changeLoc('#p4', false)">
        <p>Tiers</p>
      </TabButton>
      <TabButton @click="changeLoc('#p5', false)">
        <p>Donations</p>
      </TabButton>
    </TabGroup>
    <SpinningBlahaj />
    <PageContainer>
      <template #title>
        <h1>{{ randomTitle }}</h1>
        <p>Welcome to <b>Blahaj Land</b>! Hope you enjoy your stay.</p>
      </template>
      <GridContainer rows="4">
        <ContentBlock color="#ACD3DC">
          <p>Take a tour and see <b>what's inside :3</b></p>
          <CustomButton @click="changeLoc('#p1', false)">
            <p>Discover</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#F0C1B7">
          <p>Create your account and <b>pass the vibe check &gt;:3</b></p>
          <CustomButton @click="changeLoc('https://discord.gg/23ScBhN7xx')">
            <p>Sing up</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#B1BCE1">
          <p>Just want to hang around? Join our <b>Discord</b></p>
          <CustomButton @click="changeLoc('https://discord.gg/23ScBhN7xx')">
            <p>Join</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#DCDCDC">
          <p>Already part of the community? Get access to <b>all the apps</b></p>
          <CustomButton @click="changeLoc('https://blahaj.land/yunohost/sso/')">
            <p>Open</p>
          </CustomButton>
        </ContentBlock>
      </GridContainer>
    </PageContainer>
    <CustomGap gap="32px" />
    <PageContainer>
      <template #title>
        <h2 id="p1">Why?</h2>
        <p>Why should you consider <b>Blahaj Land</b> for your needs ? ;3</p>
      </template>
      <GridContainer>
        <ContentBlock color="#B1BCE1">
          <img src="/icons/website.png" alt="Website" />
          <h3>Host your own website for free!</h3>
          <p>With <b>blahaj.land</b> you can easily host your own static site for free!</p>
        </ContentBlock>
        <ContentBlock color="#ACD3DC">
          <img src="/icons/cloud.png" alt="Cloud" />
          <h3>Cloud storage</h3>
          <p>Starting at <b>1€&sol;month</b></p>
        </ContentBlock>
        <ContentBlock color="#C8E7FF">
          <img src="/icons/communication.png" alt="Communication" />
          <h3>Communication services</h3>
          <p>E-mail, Fediverse, Send and <b>more</b>!</p>
        </ContentBlock>
        <ContentBlock color="#DEAAFF" gap="8px">
          <img src="/icons/friend.png" alt="Communication" />
          <h3>Bring your friends in!</h3>
          <p>
            For every person you invite, you'll get <b>5GB</b> of storage. If they make a donation,
            you'll get an extra <b>10GB</b>.
          </p>
        </ContentBlock>
        <ContentBlock color="#ECBCFD" gap="8px">
          <img src="/icons/switch.png" alt="Communication" />
          <h3>You want to host your website?</h3>
          <p>
            If you switch from <b>neocities.org</b>, <b>Github Pages</b>, or any other host, you'll
            get <b>15GB</b> of storage and a month of <b>Premium</b> for free.
          </p>
        </ContentBlock>
        <ContentBlock color="#FFCBF2">
          <img src="/icons/rosa.png" alt="Communication" />
          <h3>Queer-powered</h3>
          <p>Everybody is welcome here. You always will be.</p>
        </ContentBlock>
      </GridContainer>
    </PageContainer>
    <PageContainer>
      <template #title>
        <h2 id="p2">Services</h2>
        <p>The stuff we host >:3</p>
      </template>
      <SlideableContainer>
        <SideBlock v-for="(e, i) in appList['apps']" :key="i" :color="e.color">
          <template #image>
            <img :src="e.img" :alt="e.title" />
          </template>
          <h3>{{ e.title }}</h3>
          <p v-html="e.desc"></p>
        </SideBlock>
      </SlideableContainer>
    </PageContainer>
    <PageContainer>
      <template #title>
        <h2 id="p3">User sites</h2>
        <p>Here you can view our user's sites :3</p>
      </template>
      <SlideableContainer>
        <SmallBlock v-for="(e, i) in usersList['users']" :key="i" :color="e.color" @click="changeLoc(e.href)">
          <img :src="e.img" :alt="e.title" />
          <h3>{{ e.title }}</h3>
        </SmallBlock>
      </SlideableContainer>
    </PageContainer>
    <PageContainer>
      <template #title>
        <h2 id="p4">Tiers</h2>
        <p>Get more features and support the website >83</p>
      </template>
      <GridContainer>
        <ContentBlock color="#BCDBFF">
          <h2>Starter</h2>
          <h3>Free</h3>
          <p>&bull; Send, Vaultwarden, Haste & more
            <br />&bull; Email (500MB quota)
            <br />&bull; One hosted site</p>
          <CustomButton @click="changeLoc('https://discord.gg/23ScBhN7xx')">
            <p>Join</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#FFCEF1">
          <h2>Supporter</h2>
          <h3>Starting at 1€/month</h3>
          <p>
            &bull; <b>10GB</b> of Nextcloud storage
            <br />&bull; Unlimited site hosting
            <br />&bull; All the advantages of the <b>Starter</b> tier
          </p>
          <CustomButton @click="changeLoc('https://ko-fi.com/eryncloud/')">
            <p>Donate</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#FFE5A3">
          <h2>Premium</h2>
          <h3>Starting at 5€/month</h3>
          <p>
            &bull; <b>250GB</b> of Nextcloud storage
            <br />&bull; Discord bot hosting
            <br />&bull; All the advantages of the <b>Supporter</b> tier
          </p>
          <CustomButton @click="changeLoc('https://ko-fi.com/eryncloud/')">
            <p>Donate</p>
          </CustomButton>
        </ContentBlock>
      </GridContainer>
    </PageContainer>
    <PageContainer :last="true">
      <template #title>
        <h2 id="p5">Donations</h2>
        <p>Thanks for your <i>kind</i> donations &lt;3</p>
        <CustomGap gap="8px" />
      </template>
      <SlideableContainer>
        <ContentBlock v-for="(e, i) in donationsList['donations']" :key="i" :color="e.color">
          <h3>{{ e.title }}</h3>
          <p>
            <i>{{ e.desc }}</i>
          </p>
        </ContentBlock>
      </SlideableContainer>
    </PageContainer>
  </div>
</template>

<style></style>
