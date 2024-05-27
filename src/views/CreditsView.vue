<script setup lang="ts">
import BlockCard from '@/components/cards/BlockCard.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import ContentContainer from '@/components/roots/ContentContainer.vue'
import PageContainer from '@/components/roots/PageContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import BlahajButton from '@/library/vue/BlahajButton.vue'
import { changeLoc } from '@/library/ts/common-tools'

changeLoc('#', false)
</script>

<template>
  <PageContainer>
    <SpinningBlahaj />
    <ContentContainer last>
      <template #title>
        <h1>Credits</h1>
        <p>Here's who does what :3</p>
      </template>
      <GridContainer :rows="4">
        <BlockCard color="#D4D9FF">
          <img src="https://blahaj.land/static/images/icons/cloud.png" alt="Cloud" />
          <h3>Services</h3>
          <p>Hosted by <b>eryn</b></p>
          <BlahajButton
            background="var(--background)"
            @click="changeLoc('https://www.github.com/hericiumvevo/')"
          >
            <img src="https://blahaj.land/static/images/icons/website.png" alt="Link" />
            <p>GitHub</p>
          </BlahajButton>
        </BlockCard>
        <BlockCard color="#F6D4FF">
          <img src="https://blahaj.land/static/images/icons/open.png" alt="Website" />
          <h3>Icons</h3>
          <p>by <b>Nerd</b></p>
          <BlahajButton
            background="var(--background)"
            @click="changeLoc('https://www.github.com/imalonelynerd')"
          >
            <img src="https://blahaj.land/static/images/icons/website.png" alt="Link" />
            <p>GitHub</p>
          </BlahajButton>
        </BlockCard>
        <BlockCard color="#FFD4D9">
          <img src="https://blahaj.land/static/images/icons/website.png" alt="Website" />
          <h3>Website</h3>
          <p>by <b>Nerd</b></p>
          <BlahajButton
            background="var(--background)"
            @click="changeLoc('https://www.github.com/imalonelynerd')"
          >
            <img src="https://blahaj.land/static/images/icons/website.png" alt="Link" />
            <p>GitHub</p>
          </BlahajButton>
        </BlockCard>
        <BlockCard color="#ACD3DC">
          <img src="https://blahaj.land/static/images/Favicon.png" alt="Blobhaj" />
          <h3>"Blobhaj" icons</h3>
          <p>by <b>heatherhorns</b></p>
          <BlahajButton
            background="var(--background)"
            @click="changeLoc('https://www.reddit.com/user/heatherhorns/')"
          >
            <img src="https://blahaj.land/static/images/icons/website.png" alt="Link" />
            <p>Reddit</p>
          </BlahajButton>
        </BlockCard>
      </GridContainer>
    </ContentContainer>
  </PageContainer>
</template>
