<script setup lang="ts">
import ContentContainer from '@/components/roots/ContentContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import BlockCard from '@/components/cards/BlockCard.vue'
import { changeLoc } from '@/library/ts/common-tools'
import PageContainer from '@/components/roots/PageContainer.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'

changeLoc('#', false)
</script>

<!-- Static data, from donations.json -->

<template>
  <PageContainer>
    <SpinningBlahaj />
    <ContentContainer last>
      <template #title>
        <h1>Donations from Ko-Fi</h1>
        <p>
          This page is dedicated to all the persons who donated through Ko-Fi. Thanks for your
          support &lt;:3
        </p>
      </template>
      <GridContainer :rows="4">
        <BlockCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>michal</h3>
          <p><i>gta4 crack reload fitgirl no virus</i></p>
        </BlockCard>
        <BlockCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>fuckin dumb fox</h3>
          <p><i>pogchamp</i></p>
        </BlockCard>
        <BlockCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>imnotklaus</h3>
        </BlockCard>
        <BlockCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>Henry Hiles</h3>
          <p><i>Good luck with blahaj.land, keep up the good work Eryn!</i></p>
        </BlockCard>
        <BlockCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>Matth. B</h3>
          <p><i>keep it up</i></p>
        </BlockCard>
        <BlockCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>Nerd</h3>
          <p><i>Thanks for all ! You kinda saved my life</i></p>
        </BlockCard>
        <BlockCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>6vz</h3>
        </BlockCard>
        <BlockCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>Magnetron</h3>
          <p><i>FIRST</i></p>
        </BlockCard>
      </GridContainer>
    </ContentContainer>
  </PageContainer>
</template>
