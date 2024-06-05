<script setup lang="ts">
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import ContentContainer from '@/components/frames/ContentFrame.vue'
import PageFrame from '@/components/frames/PageFrame.vue'
import GridContainer from '@/components/containers/GridContainer.vue'

import { goToTop } from 'blahaj-library'
import CreditsBundle from '@/bundles/CreditsBundle.vue'

goToTop()
</script>

<template>
  <PageFrame>
    <SpinningBlahaj />
    <ContentContainer last>
      <template #title>
        <h1>Credits</h1>
        <p>Here's who does what :3</p>
      </template>
      <GridContainer :rows="4">
        <CreditsBundle />
      </GridContainer>
    </ContentContainer>
  </PageFrame>
</template>
