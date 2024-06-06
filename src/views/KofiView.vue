<script setup lang="ts">
import ContentContainer from '@/components/frames/ContentFrame.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import PageFrame from '@/components/frames/PageFrame.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import { goToTop } from 'blahaj-library'
import KofiBundle from '@/bundles/KofiBundle.vue'

goToTop()
</script>

<template>
  <PageFrame>
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
        <KofiBundle />
      </GridContainer>
    </ContentContainer>
  </PageFrame>
</template>
