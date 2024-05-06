<script setup>
import ContentContainer from '@/components/containers/ContentContainer.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import SpinningBlahaj from '@/library/vue/SpinningBlahaj.vue'
import SmallCard from '@/components/cards/SmallCard.vue'
import { changeLoc } from '@/library/js/linkTools.js'
import PageContainer from '@/components/containers/PageContainer.vue'

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
        <SmallCard orientation="column" color="#ffadad">
          <h3>michal</h3>
          <p><i>gta4 crack reload fitgirl no virus</i></p>
        </SmallCard>
        <SmallCard orientation="column" color="#ffd6a5">
          <h3>fuckin dumb fox</h3>
          <p><i>pogchamp</i></p>
        </SmallCard>
        <SmallCard orientation="column" color="#fdffb6">
          <h3>imnotklaus</h3>
        </SmallCard>
        <SmallCard orientation="column" color="#caffbf">
          <h3>Henry Hiles</h3>
          <p><i>Good luck with blahaj.land, keep up the good work Eryn!</i></p>
        </SmallCard>
        <SmallCard orientation="column" color="#9bf6ff">
          <h3>Matth. B</h3>
          <p><i>keep it up</i></p>
        </SmallCard>
        <SmallCard orientation="column" color="#a0c4ff">
          <h3>Nerd</h3>
          <p><i>Thanks for all ! You kinda saved my life</i></p>
        </SmallCard>
        <SmallCard orientation="column" color="#bdb2ff">
          <h3>6vz</h3>
        </SmallCard>
        <SmallCard orientation="column" color="#ffc6ff">
          <h3>Magnetron</h3>
          <p><i>FIRST</i></p>
        </SmallCard>
      </GridContainer>
    </ContentContainer>
  </PageContainer>
</template>

<style scoped lang="sass"></style>
