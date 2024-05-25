<script setup>
import ContentContainer from '@/components/roots/ContentContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import VerticalCard from '@/components/cards/VerticalCard.vue'
import { changeLoc } from '@/library/js/linkTools.js'
import PageContainer from '@/components/roots/PageContainer.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'

changeLoc('#', false)
</script>

<!-- Static data, from donations.json -->

<template>
  <PageContainer>
    <SpinningBlahaj />
    <ContentContainer :last="true">
      <template #title>
        <h1>Donations from Ko-Fi</h1>
        <p>
          This page is dedicated to all the persons who donated through Ko-Fi. Thanks for your
          support &lt;:3
        </p>
      </template>
      <GridContainer rows="4">
        <VerticalCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>michal</h3>
          <p><i>gta4 crack reload fitgirl no virus</i></p>
        </VerticalCard>
        <VerticalCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>fuckin dumb fox</h3>
          <p><i>pogchamp</i></p>
        </VerticalCard>
        <VerticalCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>imnotklaus</h3>
        </VerticalCard>
        <VerticalCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>Henry Hiles</h3>
          <p><i>Good luck with blahaj.land, keep up the good work Eryn!</i></p>
        </VerticalCard>
        <VerticalCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>Matth. B</h3>
          <p><i>keep it up</i></p>
        </VerticalCard>
        <VerticalCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>Nerd</h3>
          <p><i>Thanks for all ! You kinda saved my life</i></p>
        </VerticalCard>
        <VerticalCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>6vz</h3>
        </VerticalCard>
        <VerticalCard color="#C8DDFF">
          <img alt="Kofi" src="https://blahaj.land/static/images/icons/kofi.png" />
          <h3>Magnetron</h3>
          <p><i>FIRST</i></p>
        </VerticalCard>
      </GridContainer>
    </ContentContainer>
  </PageContainer>
</template>

<style scoped lang="sass"></style>
